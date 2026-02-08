/**
 * Secure API wrapper with rate limiting, validation, and abuse prevention
 */

// Rate limiting storage
const requestHistory = {
  images: { count: 0, resetTime: Date.now() },
  videos: { count: 0, resetTime: Date.now() },
};

// Configuration
const RATE_LIMITS = {
  images: { maxRequests: 10, windowMs: 60000 }, // 10 requests per minute
  videos: { maxRequests: 5, windowMs: 60000 },   // 5 requests per minute
};

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache

// Cache storage
const cache = {
  images: { data: null, timestamp: 0 },
  videos: { data: null, timestamp: 0 },
};

/**
 * Check if request is within rate limit
 */
const checkRateLimit = (type) => {
  const now = Date.now();
  const limit = RATE_LIMITS[type];
  const history = requestHistory[type];

  // Reset if window expired
  if (now - history.resetTime > limit.windowMs) {
    history.count = 0;
    history.resetTime = now;
  }

  // Check if limit exceeded
  if (history.count >= limit.maxRequests) {
    const waitTime = Math.ceil((limit.windowMs - (now - history.resetTime)) / 1000);
    throw new Error(`Rate limit exceeded. Please wait ${waitTime} seconds before trying again.`);
  }

  history.count++;
  return true;
};

/**
 * Get cached data if available and fresh
 */
const getCachedData = (type) => {
  const cached = cache[type];
  const now = Date.now();
  
  if (cached.data && (now - cached.timestamp) < CACHE_DURATION) {
    return cached.data;
  }
  
  return null;
};

/**
 * Set cache data
 */
const setCachedData = (type, data) => {
  cache[type] = {
    data,
    timestamp: Date.now(),
  };
};

/**
 * Validate API response
 */
const validateResponse = (data, type) => {
  if (!data) {
    throw new Error('Invalid response: empty data');
  }

  if (type === 'images') {
    if (!Array.isArray(data)) {
      throw new Error('Invalid response: expected array');
    }
    
    // Validate each image URL
    return data.filter(url => {
      if (typeof url !== 'string') return false;
      try {
        const urlObj = new URL(url);
        return urlObj.protocol === 'https:' && 
               urlObj.hostname.includes('thriviousice-cooling.com');
      } catch {
        return false;
      }
    });
  }

  if (type === 'videos') {
    if (!Array.isArray(data)) {
      throw new Error('Invalid response: expected array');
    }
    
    // Validate video URLs
    return data.filter(url => {
      if (typeof url !== 'string') return false;
      try {
        const urlObj = new URL(url);
        const allowedDomains = ['youtube.com', 'youtu.be', 'vimeo.com', 'thriviousice-cooling.com'];
        return urlObj.protocol === 'https:' && 
               allowedDomains.some(domain => urlObj.hostname.includes(domain));
      } catch {
        return false;
      }
    });
  }

  return data;
};

/**
 * Generate a simple request signature (not cryptographically secure, but adds a layer)
 * In production, server should validate this
 */
const generateRequestSignature = () => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(7);
  // Simple hash-like signature (server should validate timestamp freshness)
  return btoa(`${timestamp}-${random}-thrivious`).substring(0, 32);
};

/**
 * Secure API fetch with rate limiting and validation
 */
export const secureFetch = async (url, type = 'images', options = {}) => {
  // Check cache first
  const cached = getCachedData(type);
  if (cached) {
    return cached;
  }

  // Check rate limit
  checkRateLimit(type);

  // Validate URL
  if (!url || typeof url !== 'string') {
    throw new Error('Invalid URL');
  }

  if (!url.startsWith('https://') || !url.includes('thriviousice-cooling.com')) {
    throw new Error('Invalid or unauthorized URL');
  }

  // Validate we're on the correct domain (client-side check)
  if (typeof window !== 'undefined') {
    const currentDomain = window.location.hostname;
    const allowedDomains = ['thriviousice-cooling.com', 'localhost', '127.0.0.1'];
    const isAllowedDomain = allowedDomains.some(domain => 
      currentDomain === domain || currentDomain.endsWith('.' + domain)
    );
    
    if (!isAllowedDomain && process.env.NODE_ENV === 'production') {
      throw new Error('Unauthorized domain');
    }
  }

  try {
    const requestSignature = generateRequestSignature();
    
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'omit',
      cache: 'default',
      headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-Client-Type': 'web',
        'X-Client-Version': '2.0.0',
        'X-Request-Signature': requestSignature,
        'X-Request-Timestamp': Date.now().toString(),
        'X-Origin': typeof window !== 'undefined' ? window.location.origin : '',
        'Referer': typeof window !== 'undefined' ? window.location.href : '',
        // Add API key if configured (server should validate this)
        ...(process.env.REACT_APP_API_KEY ? { 'X-API-Key': process.env.REACT_APP_API_KEY } : {}),
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // Validate response
    const validatedData = validateResponse(data, type);
    
    // Cache valid response
    setCachedData(type, validatedData);
    
    return validatedData;
  } catch (error) {
    console.error(`Secure API fetch error (${type}):`, error);
    throw error;
  }
};

/**
 * Clear cache (useful for testing or forced refresh)
 */
export const clearCache = (type = null) => {
  if (type) {
    cache[type] = { data: null, timestamp: 0 };
  } else {
    cache.images = { data: null, timestamp: 0 };
    cache.videos = { data: null, timestamp: 0 };
  }
};

/**
 * Get rate limit status
 */
export const getRateLimitStatus = (type) => {
  const history = requestHistory[type];
  const limit = RATE_LIMITS[type];
  const now = Date.now();
  
  if (now - history.resetTime > limit.windowMs) {
    return { remaining: limit.maxRequests, resetIn: 0 };
  }
  
  return {
    remaining: Math.max(0, limit.maxRequests - history.count),
    resetIn: Math.ceil((limit.windowMs - (now - history.resetTime)) / 1000),
  };
};

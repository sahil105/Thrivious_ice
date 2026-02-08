# Server-Side Security Implementation Guide

## ⚠️ CRITICAL: Client-Side Security Can Be Bypassed

**The security measures in the React app are helpful but can be bypassed.** Anyone can:
- Open browser DevTools
- See the API endpoints
- Call them directly
- Bypass rate limiting
- Access data without restrictions

**You MUST implement server-side security!**

## Recommended Server-Side Security (PHP Example)

### Option 1: Simple API Key (Easiest)

```php
<?php
// list.php - Images API with API Key

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://www.thriviousice-cooling.com');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: X-API-Key, X-Requested-With');

// API Key (store in environment variable, not in code!)
$validApiKey = getenv('GALLERY_API_KEY') ?: 'your-secret-api-key-here';

// Check API Key
$providedKey = $_SERVER['HTTP_X_API_KEY'] ?? '';
if ($providedKey !== $validApiKey) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized: Invalid API key']);
    exit;
}

// Rate limiting by IP
$ip = $_SERVER['REMOTE_ADDR'];
$rateLimitFile = sys_get_temp_dir() . '/rate_limit_' . md5($ip) . '.txt';
$maxRequests = 20;
$windowSeconds = 60;

if (file_exists($rateLimitFile)) {
    $data = json_decode(file_get_contents($rateLimitFile), true);
    $now = time();
    
    if ($now - $data['resetTime'] > $windowSeconds) {
        $data = ['count' => 0, 'resetTime' => $now];
    }
    
    if ($data['count'] >= $maxRequests) {
        http_response_code(429);
        echo json_encode(['error' => 'Rate limit exceeded']);
        exit;
    }
    
    $data['count']++;
} else {
    $data = ['count' => 1, 'resetTime' => time()];
}

file_put_contents($rateLimitFile, json_encode($data));

// Validate referrer
$referrer = $_SERVER['HTTP_REFERER'] ?? '';
if (!str_contains($referrer, 'thriviousice-cooling.com')) {
    http_response_code(403);
    echo json_encode(['error' => 'Invalid referrer']);
    exit;
}

// Get and return images
$images = getImagesFromDatabase(); // Your function
$validImages = array_filter($images, function($url) {
    return filter_var($url, FILTER_VALIDATE_URL) && 
           str_starts_with($url, 'https://') &&
           str_contains($url, 'thriviousice-cooling.com');
});

echo json_encode(array_values($validImages));
?>
```

### Option 2: JWT Token (More Secure)

```php
<?php
// Requires: composer require firebase/php-jwt

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

header('Content-Type: application/json');

$secretKey = getenv('JWT_SECRET') ?: 'your-secret-key';

// Get token from header
$token = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
$token = str_replace('Bearer ', '', $token);

if (!$token) {
    http_response_code(401);
    echo json_encode(['error' => 'No token provided']);
    exit;
}

try {
    $decoded = JWT::decode($token, new Key($secretKey, 'HS256'));
    
    // Check if token is for this API
    if ($decoded->api !== 'gallery') {
        throw new Exception('Invalid token scope');
    }
    
    // Token is valid, proceed
    $images = getImagesFromDatabase();
    echo json_encode($images);
    
} catch (Exception $e) {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid token']);
    exit;
}
?>
```

### Option 3: IP Whitelist + Referrer Check (Simplest)

```php
<?php
// list.php - Simple but effective

header('Content-Type: application/json');

// IP Whitelist (optional - only if you have fixed IPs)
$allowedIPs = [
    // Add your server IPs if needed
    // '123.456.789.0',
];

$clientIP = $_SERVER['REMOTE_ADDR'];

// Check referrer (most important)
$referrer = $_SERVER['HTTP_REFERER'] ?? '';
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

$allowedDomains = [
    'thriviousice-cooling.com',
    'www.thriviousice-cooling.com',
];

$isValidReferrer = false;
foreach ($allowedDomains as $domain) {
    if (str_contains($referrer, $domain) || str_contains($origin, $domain)) {
        $isValidReferrer = true;
        break;
    }
}

if (!$isValidReferrer) {
    http_response_code(403);
    echo json_encode(['error' => 'Access denied: Invalid referrer']);
    exit;
}

// Rate limiting
$rateLimitKey = 'rate_limit_' . md5($clientIP);
// Use Redis, Memcached, or file-based rate limiting
// (See rate limiting example above)

// Return data
$images = getImagesFromDatabase();
echo json_encode($images);
?>
```

## Update Client-Side to Use API Key

If you implement Option 1, update the client:

```javascript
// In secureApi.js, add API key to headers
headers: {
  'X-API-Key': process.env.REACT_APP_API_KEY || 'your-api-key',
  // ... other headers
}
```

Then create `.env` file:
```
REACT_APP_API_KEY=your-secret-api-key-here
```

**⚠️ Note:** Even with API keys in environment variables, they're visible in the built JavaScript. This is why server-side validation is critical!

## Best Practices Summary

1. ✅ **Always validate on server** - Never trust client-side validation
2. ✅ **Use HTTPS only** - Force all API calls to HTTPS
3. ✅ **Implement rate limiting** - Prevent abuse
4. ✅ **Check referrer/origin** - Verify requests come from your domain
5. ✅ **Use API keys or tokens** - Add authentication layer
6. ✅ **Log all requests** - Monitor for suspicious activity
7. ✅ **Limit response size** - Prevent data scraping
8. ✅ **Use CORS properly** - Restrict to your domain only
9. ✅ **Implement IP blocking** - Block abusive IPs
10. ✅ **Regular security audits** - Check for vulnerabilities

## Current Status

✅ Client-side protections: Implemented
⚠️ Server-side protections: **REQUIRED** (see examples above)

**The APIs are currently publicly accessible. Implement server-side security immediately for production use.**

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/': 'Home - Thrivious Ice & Cooling System',
  '/about-us': 'About Us - Thrivious Ice & Cooling System',
  '/contact-us': 'Contact Us - Thrivious Ice & Cooling System',
  '/gallery': 'Gallery - Thrivious Ice & Cooling System',
  '/videos': 'Video Gallery - Thrivious Ice & Cooling System',
  '/products/ice-block-making-machine': 'Ice Block Making Machine - Thrivious',
  '/products/direct-refrigeration-block-ice-machine': 'Direct Refrigeration Block Ice Machine - Thrivious',
  '/products/ice-cube-machine': 'Ice Cube Machine - Thrivious',
  '/products/ice-crusher-machine': 'Ice Crusher Machine - Thrivious',
  '/products/ice-cutting-machine': 'Ice Cutting Machine - Thrivious',
  '/products/cold-room': 'Cold Room - Thrivious',
  '/products/Flake-ice-machine': 'Flake Ice Machine - Thrivious',
};

const defaultTitle = 'Thrivious Ice & Cooling System - Premium Ice Making Machines';

export function usePageTitle() {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || defaultTitle;
    document.title = title;
    
    // Update meta description based on page
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      const descriptions = {
        '/': 'Leading manufacturer of ice block making machines, ice cube machines, cold rooms, and cooling systems. Serving customers worldwide.',
        '/about-us': 'Learn about Thrivious Ice & Cooling System - Your trusted partner for quality ice making and cooling solutions.',
        '/contact-us': 'Contact Thrivious Ice & Cooling System for inquiries about our ice making machines and cooling systems.',
        '/gallery': 'View our gallery of ice making machines, cold rooms, and cooling systems installations.',
        '/videos': 'Watch videos of our ice making machines and cooling systems in action.',
      };
      metaDescription.setAttribute('content', descriptions[location.pathname] || descriptions['/']);
    }
  }, [location.pathname]);
}

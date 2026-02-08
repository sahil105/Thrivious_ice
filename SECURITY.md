# Security Features

This document outlines the security measures implemented in the Thrivious Ice & Cooling System website.

## Security Headers

The site implements comprehensive security headers to protect against common web vulnerabilities:

- **X-Frame-Options: DENY** - Prevents clickjacking attacks
- **X-Content-Type-Options: nosniff** - Prevents MIME type sniffing
- **X-XSS-Protection: 1; mode=block** - Enables browser XSS protection
- **Referrer-Policy: strict-origin-when-cross-origin** - Controls referrer information
- **Strict-Transport-Security** - Forces HTTPS connections
- **Content-Security-Policy** - Restricts resource loading to prevent XSS

## Input Validation & Sanitization

- All user inputs are validated and sanitized
- Contact form messages are limited to 1000 characters
- HTML tags are stripped from user input
- URLs are validated before opening external links

## URL Validation

- External URLs are validated before fetching
- Only HTTPS URLs from trusted domains are allowed
- Video URLs are filtered to allow only YouTube, Vimeo, and trusted domains

## React Security

- React automatically escapes content to prevent XSS
- Error boundaries catch and handle errors gracefully
- No sensitive data exposed in client-side code

## HTTPS Enforcement

- All external links use HTTPS
- Server configuration enforces HTTPS redirects
- HSTS header ensures secure connections

## Best Practices

1. **Never expose API keys or secrets** in client-side code
2. **Validate all user inputs** before processing
3. **Use HTTPS** for all external resources
4. **Keep dependencies updated** to patch security vulnerabilities
5. **Regular security audits** recommended

## Reporting Security Issues

If you discover a security vulnerability, please report it responsibly.

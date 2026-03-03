/**
 * auth.js — Verdant Auth Guard
 * ==============================
 */

(async function authGuard() {
    const token = localStorage.getItem('verdant_token');

    // 1. No token at all — go straight to login
    if (!token) {
        window.location.replace('login.html');
        return;
    }

    // 2. Define the Backend URL (Same as shared.js)
    const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:3001'
        : 'https://verdant-production-20c6.up.railway.app';

    try {
        // 3. Use the full API_URL to verify the token
        const res = await fetch(`${API_URL}/api/verify-token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token } )
        });

        if (!res.ok) {
            // Token invalid or expired — clear it and redirect
            localStorage.removeItem('verdant_token');
            window.location.replace('login.html');
        }
        // Token valid — page continues loading normally

    } catch (err) {
        // Server unreachable — redirect to login for security
        console.error('Auth check failed:', err);
        window.location.replace('login.html');
    }
})();

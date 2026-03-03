/**
 * auth.js — Verdant Auth Guard
 * ==============================
 */
// 1. DEFINE THE ONE, CORRECT, AND COMPLETE BACKEND URL
const API_BASE_URL = 'https://verdant-v2-production.up.railway.app';


(async function authGuard( ) {
    const token = localStorage.getItem('verdant_token');

    // 2. No token at all — go straight to login
    if (!token) {
        // No need for .replace, this is simpler
        window.location.href = 'login.html';
        return;
    }

    try {
        // 3. Use the CORRECT variable (API_BASE_URL) in the fetch call
        const res = await fetch(`${API_BASE_URL}/api/verify-token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token })
        });

        if (!res.ok) {
            // Token invalid or expired — clear it and redirect
            localStorage.removeItem('verdant_token');
            window.location.href = 'login.html';
        }
        // Token valid — page continues loading normally

    } catch (err) {
        // Server unreachable — redirect to login for security
        console.error('Auth check failed:', err);
        window.location.href = 'login.html';
    }
})();

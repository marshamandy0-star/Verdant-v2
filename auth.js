/**
 * auth.js — Verdant Auth Guard
 * ==============================
 * Include this script at the TOP of every protected dashboard page.
 * It checks the token in localStorage against /api/verify-token.
 * If the token is missing or invalid, it redirects to login.html immediately.
 *
 * Usage: <script src="auth.js"></script>  (before any other scripts)
 */

(async function authGuard() {
  const token = localStorage.getItem('verdant_token');

  // No token at all — go straight to login
  if (!token) {
    window.location.replace('login.html');
    return;
  }

  try {
    const res = await fetch('/api/verify-token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token })
    });

    if (!res.ok) {
      // Token invalid or expired — clear it and redirect
      localStorage.removeItem('verdant_token');
      window.location.replace('login.html');
    }
    // Token valid — page continues loading normally

  } catch (err) {
    // Server unreachable — redirect to login for security
    window.location.replace('login.html');
  }
})();

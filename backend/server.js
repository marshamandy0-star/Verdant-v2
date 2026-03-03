const express = require('express');
const cors = require('cors');
const path = require('path');
const speakeasy = require('speakeasy'); // <--- 1. ADD THIS LINE
require('dotenv').config();

const app = express();

// Middleware
const allowedOrigins = [
    'http://localhost:3001',
    'http://localhost:5500',
    'https://verdant-production-20c6.up.railway.app',
    'https://your-site-name.netlify.app', // <--- REPLACE THIS with your Netlify URL
    process.env.ALLOWED_ORIGIN
].filter(Boolean );

app.use(cors({
    origin: function(origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

app.use(express.json());

// Serve all frontend HTML/CSS/JS files from the parent folder
app.use(express.static(path.join(__dirname, '..')));

// ── FIXED TOTP SECRET (Only you know this) ──
const FIXED_SECRET = process.env.TOTP_SECRET || 'KQUDKNCPJZTCGSKPFJHHIMRPOZYF43RSKJMDMVSKMNKGI3KTIA3A';

// In-memory storage for user sessions
const users = {
  'ChrisJ1808': {
    password: process.env.USER_PASSWORD || 'James_chris901',
    verified: false
  }
};

const sessions = {}; // Store temporary sessions during 2FA

// ── SIGN IN ENDPOINT ──
app.post('/api/signin', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  const user = users[email];
  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  // Generate a temporary session ID
  const sessionId = Math.random().toString(36).substring(2, 15);
  sessions[sessionId] = {
    email,
    createdAt: Date.now(),
    totpVerified: false
  };

  res.json({
    success: true,
    sessionId,
    message: 'Sign in successful. Please verify with 2FA.'
  });
});

// ── VERIFY TOTP CODE ──
app.post('/api/verify-totp', (req, res) => {
  const { sessionId, code } = req.body;

  if (!sessionId || !sessions[sessionId]) {
    return res.status(401).json({ error: 'Invalid session' });
  }

  if (!code || code.length !== 6) {
    return res.status(400).json({ error: 'Invalid code format' });
  }

  // Verify the code against the fixed secret (allow 2 windows for time drift)
  const verified = speakeasy.totp.verify({
    secret: FIXED_SECRET,
    encoding: 'base32',
    token: code,
    window: 2
  });

  if (!verified) {
    return res.status(401).json({ error: 'Invalid authentication code' });
  }

  // Mark session as verified
  const session = sessions[sessionId];
  session.totpVerified = true;
  const user = users[session.email];
  user.verified = true;

  res.json({
    success: true,
    message: '2FA verification successful',
    token: sessionId // This token grants access to the dashboard
  });
});

// ── VERIFY TOKEN (for dashboard access) ──
app.post('/api/verify-token', (req, res) => {
  const { token } = req.body;

  if (!token || !sessions[token]) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }

  const session = sessions[token];
  if (!session.totpVerified) {
    return res.status(401).json({ error: '2FA not verified' });
  }

  res.json({
    success: true,
    email: session.email,
    message: 'Token is valid'
  });
});

// ── SIGN OUT ENDPOINT ──
app.post('/api/signout', (req, res) => {
  const { token } = req.body;

  if (token && sessions[token]) {
    delete sessions[token];
  }

  res.json({ success: true, message: 'Signed out successfully' });
});

// ── HEALTH CHECK ──
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running' });
});

// --- START SERVER ---
// 2. DEFINE THE PORT
const PORT = process.env.PORT || 3000;

// 3. START LISTENING ON THE PORT
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

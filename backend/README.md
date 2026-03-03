# Verdant Private Banking — Backend

A simple Node.js/Express backend that serves the Verdant frontend and handles authentication with Google Authenticator (TOTP).

---

## Project Structure

```
verdant/
├── backend/
│   ├── server.js          ← The backend server (run this)
│   ├── package.json
│   ├── .env.example       ← Copy to .env and fill in values
│   └── README.md
├── dashboard.html
├── login.html
├── transactions.html
├── cards.html
├── bill.html
├── transfer.html
├── settings.html
├── investments.html
├── savings.html
├── index.html
├── shared.css
├── shared.js
├── auth.js
└── sidebar.js
```

---

## How to Run Locally

### 1. Install dependencies
```bash
cd backend
npm install
```

### 2. Set up environment variables
```bash
cp .env.example .env
# Edit .env if needed (the defaults work out of the box)
```

### 3. Start the server
```bash
npm start
```

The server starts on **http://localhost:3001**

Open your browser to: **http://localhost:3001/login.html**

---

## Login Credentials

| Field    | Value                  |
|----------|------------------------|
| Email    | user@example.com       |
| Password | password123            |
| 2FA Code | From your Google Authenticator app |

Your TOTP secret is already registered in your Authenticator app:
```
KQUDKNCPJZTCGSKPFJHHIMRPOZYF43RSKJMDMVSKMNKGI3KTIA3A
```

---

## How Authentication Works

1. User enters email + password → POST `/api/signin` → returns `sessionId`
2. User enters 6-digit code from Authenticator app → POST `/api/verify-totp` → returns `token`
3. Token is stored in `localStorage` as `verdant_token`
4. Every dashboard page calls POST `/api/verify-token` on load to verify the token
5. Sign out calls POST `/api/signout` to delete the session, then clears localStorage

---

## Deploying to Railway

1. Go to [railway.app](https://railway.app) and create a new project
2. Connect your GitHub repo (push the entire `verdant/` folder)
3. Set the **Root Directory** to `backend`
4. Set the **Start Command** to `node server.js`
5. Add environment variables in Railway's dashboard:
   - `TOTP_SECRET` = your secret
   - `USER_PASSWORD` = your password
   - `NODE_ENV` = production
6. Railway will give you a public URL — that's your live app

---

## Deploying to Render

1. Go to [render.com](https://render.com) and create a new **Web Service**
2. Connect your GitHub repo
3. Set **Root Directory** to `backend`
4. Set **Build Command** to `npm install`
5. Set **Start Command** to `node server.js`
6. Add the same environment variables as above
7. Deploy — Render gives you a public HTTPS URL

---

## Changing the Login Password

Edit `.env` and change `USER_PASSWORD` to your new password. Restart the server.

## Adding More Users

In `server.js`, find the `users` object and add more entries:
```js
const users = {
  'user@example.com': { password: 'password123', verified: false },
  'another@example.com': { password: 'anotherpassword', verified: false }
};
```
Note: All users share the same TOTP secret (same Authenticator app).

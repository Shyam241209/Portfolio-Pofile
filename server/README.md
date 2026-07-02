# Backend server (minimal Express + Mongoose)

This folder contains a minimal Node/Express backend that connects to MongoDB using Mongoose.

Quick start

1. Copy `.env.example` to `.env` and update `MONGODB_URI` with your connection string.

2. Install dependencies:

   npm install

3. Start in development mode (requires nodemon):

   npm run dev

   Or start normally:

   npm start

Endpoints

- GET /api/health — returns { ok: true }
- POST /api/contact — save a contact message. Body: { name, email, message }
- GET /api/contacts — list recent contacts

Connecting with MongoDB Compass

- Open MongoDB Compass.
- Click "New Connection" and paste your `MONGODB_URI` from `.env` (replace `<username>` and `<password>` placeholders).
- If using a local MongoDB server, use a URI like: `mongodb://localhost:27017/mydatabase`.
- Click "Connect".

Admin endpoints

- You can optionally enable simple admin endpoints by setting `ADMIN_TOKEN` in your `server/.env`.
   - Example in `.env`:

      ADMIN_TOKEN=some-secret-token

   - Then request the admin list with either the header `X-Admin-Token: some-secret-token` or `?token=some-secret-token`.

   - Endpoints:
      - GET /api/admin/contacts
      - DELETE /api/admin/contacts/:id

CORS

- The server restricts CORS to the origin in `FRONTEND_ORIGIN` (default `http://localhost:8080`). Set it in `.env` to change.

Notes

- Do NOT commit your real `.env` to version control. Use `.env.example` as a template.
- If you want HTTPS or production deployment, consider adding proper logging, process managers, and secure env management.

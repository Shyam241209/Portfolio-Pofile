const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

dotenv.config();

const app = express();
// Restrict CORS to the frontend dev origin. Change or extend this as needed for production.
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:8080';
app.use(cors({ origin: FRONTEND_ORIGIN }));
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.warn('Warning: MONGODB_URI is not set. Set it in server/.env or environment variables.');
} else {
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err.message));
}

// Models
const Contact = require('./models/contact');

// Admin token for simple protection of admin endpoints (optional). Set ADMIN_TOKEN in server/.env to enable.
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || null;

// Routes
app.get('/api/health', (req, res) => {
  return res.json({ ok: true, time: new Date() });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'name, email and message are required' });
    }

    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    return res.status(201).json({ ok: true, contact });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: err.message });
  }
});

app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(100);
    return res.json({ ok: true, contacts });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: err.message });
  }
});

// Admin routes (protected by ADMIN_TOKEN if set)
function checkAdmin(req, res, next) {
  if (!ADMIN_TOKEN) return res.status(403).json({ ok: false, error: 'admin endpoints disabled' });
  const token = req.get('x-admin-token') || req.query.token;
  if (!token || token !== ADMIN_TOKEN) return res.status(401).json({ ok: false, error: 'unauthorized' });
  return next();
}

app.get('/api/admin/contacts', checkAdmin, async (req, res) => {
  try {
    const limit = Math.min(1000, parseInt(req.query.limit || '100', 10));
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(limit);
    return res.json({ ok: true, contacts });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: err.message });
  }
});

app.delete('/api/admin/contacts/:id', checkAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    return res.json({ ok: true, id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

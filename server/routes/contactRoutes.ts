import { Router } from 'express';
import { createContact, getContacts } from '../controllers/contactController';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({ ok: true, time: new Date() });
});

router.post('/contact', createContact);
router.get('/contacts', getContacts);

export default router;

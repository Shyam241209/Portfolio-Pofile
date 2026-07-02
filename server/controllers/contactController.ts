import type { NextFunction, Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { Contact } from '../models/contact';

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const buildTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
};

export const createContact = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const name = req.body?.name?.trim();
    const email = req.body?.email?.trim();
    const subject = req.body?.subject?.trim() || 'Portfolio contact';
    const message = req.body?.message?.trim();

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'name, email and message are required' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ ok: false, error: 'please provide a valid email address' });
    }

    const contact = await Contact.create({ name, email, subject, message });

    const transporter = buildTransporter();
    if (transporter) {
      try {
        await transporter.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: process.env.SMTP_TO || process.env.SMTP_USER,
          subject: `New portfolio message: ${subject}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong><br/>${message}</p>`,
        });
      } catch (emailError) {
        console.warn('Email notification failed:', emailError);
      }
    } else {
      console.warn('SMTP settings are not configured. Skipping email notification.');
    }

    return res.status(201).json({ ok: true, contact, message: 'Message saved successfully.' });
  } catch (error) {
    next(error);
  }
};

export const getContacts = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(100);
    return res.json({ ok: true, contacts });
  } catch (error) {
    next(error);
  }
};

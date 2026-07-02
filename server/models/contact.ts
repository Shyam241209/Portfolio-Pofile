import mongoose, { Schema, model, type Document } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  subject: { type: String, trim: true, default: '' },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

export const Contact = model<IContact>('Contact', ContactSchema);

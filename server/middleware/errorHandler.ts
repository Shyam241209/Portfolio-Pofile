import type { ErrorRequestHandler, Request, Response } from 'express';

export const notFoundHandler = (_req: Request, res: Response) => {
  res.status(404).json({ ok: false, error: 'route not found' });
};

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'internal server error';

  res.status(statusCode).json({ ok: false, error: message });
};

import { Request, Response } from 'express';
import { prisma } from '../database/db';

class ListBooksController {
  async handle(req: Request, res: Response): Promise<void> {
    await prisma.book.findMany()
      .then((books) => {
        res.status(200).json({ ok: true, data: books });
      })
      .catch((error) => {
        res.status(500).json({ ok: false, message: 'Internal server error', error });
      });
  }
}

export const listBooksController = new ListBooksController();

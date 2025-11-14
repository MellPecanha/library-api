import { Request, Response } from 'express';
import { prisma } from '../database/db';
class CreateBookController {
  async handle(req: Request, res: Response): Promise<void> {
    const { title, author, publishYear, ISBN } = req.body;

    const bookExists = await prisma.book.findUnique({
      where: { ISBN },
    });

    if (!title || !author || !publishYear || !ISBN) {
      res.status(400).json({ ok: false, message: 'All book fields are required' });
      return;
    }

    if (bookExists) {
      res.status(400).json({ ok: false, message: 'Book with this ISBN already exists' });

      return;
    }

    const book = await prisma.book.create({
      data: {
        title,
        author,
        publishYear,
        ISBN,
      }
    });

    res.status(201).json({ ok: true, data: book });
  }
}

export const createBookController = new CreateBookController();

import { Request, Response } from 'express';
import { prisma } from '../database/db';
import { IBook } from '../entities/IBook';

class CreateBookController {
  async handle(req: Request, res: Response): Promise<IBook | void> {
    const { title, author, publishYear, ISBN } = req.body;

    const bookExists = await prisma.book.findUnique({
      where: { ISBN },
    });

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

    return book;
  }
}

export const createBookController = new CreateBookController();

import { Request, Response } from 'express';
import { prisma } from '../database/db';

class UpdateBookController {
  async handle(req: Request, res: Response): Promise<void> {
    const { title, author, publishYear, ISBN } = req.body;
    const isBookExists = await prisma.book.findUnique({
      where: { ISBN },
    });

    if (!isBookExists) {
      res.status(404).json({ ok: false, message: 'Book not found' });
      return;
    }


    await prisma.book.update({
      where: { ISBN },
      data: { title, author, publishYear },
    });

    res.status(200).json({ ok: true, message: 'Book updated successfully' });
  }
}

export const updateBookController = new UpdateBookController();

import { Request, Response } from 'express';
import { prisma } from '../database/db';

class ListBooksByPublisherController {
  async handle(req: Request, res: Response): Promise<void> {
    const { publisherId } = req.params;

    const books = await prisma.book.findMany({
      where: {
        publisherId,
      },
    });

    res.status(200).json(books);
  }
}

export const listBooksByPublisherController = new ListBooksByPublisherController();

import { Request, Response } from 'express';
import { prisma } from '../database/db';

class DeleteBookController {
  async handle(req: Request, res: Response): Promise<void> {
    const { ISBN } = req.body;
    const isBookExists = await prisma.book.findUnique({
      where: { ISBN },
    });

    if (!isBookExists) {
      res.status(404).json({ ok: false, message: 'Book not found' });
      return;
    }

    await prisma.book.delete({
      where: { ISBN },
    });

    res.status(200).json({ ok: true, message: 'Book deleted successfully' });
  }
}
export const deleteBookController = new DeleteBookController();

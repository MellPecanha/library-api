import { Request, Response } from 'express';
import { prisma } from '../database/db';

class PublisherBooksController {

  async handle(req: Request, res: Response): Promise<void> {
    const { publisherId } = req.params;
    const { ISBN } = req.body;

    if (!ISBN) {
      res.status(400).json({ ok: false, message: 'ISBN is required' });
      return;
    }

    // Verificar se a editora existe
    const publisher = await prisma.publisher.findUnique({
      where: { id: publisherId },
    });

    if (!publisher) {
      res.status(404).json({ ok: false, message: 'Publisher not found' });
      return;
    }

    // Verificar se o livro existe
    const existingBook = await prisma.book.findUnique({
      where: { ISBN },
    });

    if (!existingBook) {
      res.status(404).json({ ok: false, message: 'Book not found' });
      return;
    }

    // Atualizar livro com a editora
    const updatedBook = await prisma.book.update({
      where: { ISBN },
      data: { publisherId },
    });

    res.status(200).json({ ok: true, data: updatedBook });
  }
}

export const publisherBooksController = new PublisherBooksController();

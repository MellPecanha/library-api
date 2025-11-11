import { Request, Response } from 'express';

class UpdateBookController {
  async handle(req: Request, res: Response): Promise<void> {

    const { title, author, publishYear, ISBN } = req.body;
    res.status(200).json({ ok: true, message: 'Book updated successfully' });
  }
}

export const updateBookController = new UpdateBookController();

import { Request, Response } from 'express';

class CreatePublisherController {
  async handle(req: Request, res: Response): Promise<void> {
    res.status(201).json({ ok: true, message: 'Publisher created successfully' });
  }
}

export const createPublisherController = new CreatePublisherController();

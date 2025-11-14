import { Request, Response } from 'express';
import { prisma } from '../database/db';

class CreatePublisherController {
  async handle(req: Request, res: Response): Promise<void> {
    const { name } = req.body;

    if (!name) {
      res.status(400).json({ ok: false, message: 'Publisher name is required' });
      return;
    }

    const publisherExists = await prisma.publisher.findFirst({
      where: { name },
    });

    if (publisherExists) {
      res.status(400).json({ ok: false, message: 'Publisher with this name already exists' });
      return;
    }

    const publisher = await prisma.publisher.create({
      data: { name },
    });

    res.status(201).json({ ok: true, data: publisher });
  }
}

export const createPublisherController = new CreatePublisherController();

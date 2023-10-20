import { Repository } from 'typeorm';
import { Contact } from '../entities/Contact';
import { AppDataSource } from '../data-source';
import { Request, Response } from 'express-serve-static-core';
import { Anonymous } from '../entities/Anonymous';

class AnonymousService {
  private readonly anonymousRepository: Repository<Anonymous> = AppDataSource.getRepository(Anonymous);

  async findAll(req: Request, res: Response) {
    try {
      const anonymousFetch = await this.anonymousRepository.find({
        order: {
          id: 'DESC',
        },
      });
      console.log('ini data anonymous message', anonymousFetch);
      return anonymousFetch;
    } catch (error) {
      return res.status(500).json({ error: 'sorry there was an error to fetch anonymous' });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = req.body;

      const createAnonymous = this.anonymousRepository.create({
        messageAnonymous: data.messageAnonymous,
      });
      console.log('successful create anonymous', createAnonymous);
      const createdAnonymous = this.anonymousRepository.save(createAnonymous);
      return res.status(200).json(createAnonymous);
    } catch (err) {
      return res.status(500).json({ error: 'sorry there was an error to create anonymous', err });
    }
  }
}

export default new AnonymousService();

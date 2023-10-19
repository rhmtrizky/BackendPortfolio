import { Repository } from 'typeorm';
import { Contact } from '../entities/Contact';
import { AppDataSource } from '../data-source';
import { Request, Response } from 'express-serve-static-core';

class ContactService {
  private readonly contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

  async create(req: Request, res: Response) {
    try {
      const data = req.body;

      const contact = this.contactRepository.create({
        name: data.name,
        email: data.email,
        message: data.message,
      });

      console.log('successful create Contact', contact);

      const createContact = this.contactRepository.save(contact);
      return res.status(200).json(createContact);
    } catch (err) {
      return res.status(500).json({ error: 'sorry there was an error', err });
    }
  }
}

export default new ContactService();

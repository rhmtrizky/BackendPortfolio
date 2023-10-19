import { Request, Response } from 'express-serve-static-core';
import ContactService from '../services/ContactService';

class ContactController {
  create(req: Request, res: Response) {
    ContactService.create(req, res);
  }
}

export default new ContactController();

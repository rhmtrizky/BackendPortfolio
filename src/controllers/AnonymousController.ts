import { Request, Response } from 'express-serve-static-core';
import AnonymousService from '../services/AnonymousService';

class ContactController {
  create(req: Request, res: Response) {
    AnonymousService.create(req, res);
  }

  async findAll(req: Request, res: Response) {
    try {
      const response = await AnonymousService.findAll(req, res);
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}

export default new ContactController();

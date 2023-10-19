import * as express from 'express';
import ContactController from '../controllers/ContactController';
import AnonymousController from '../controllers/AnonymousController';

const router = express.Router();

router.post('/contact/send', ContactController.create);
router.post('/anonymous/message', AnonymousController.create);
router.get('/anonymous', AnonymousController.findAll);

export default router;

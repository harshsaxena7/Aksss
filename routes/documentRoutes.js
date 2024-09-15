import express from 'express';
import { createDocumentController, updateDocumentController, getDocumentByIdController } from '../controllers/documentController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authenticate, createDocumentController);
router.put('/:id', authenticate, updateDocumentController);
router.get('/:id', authenticate, getDocumentByIdController);

export default router;

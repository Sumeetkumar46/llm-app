import express, { RequestHandler } from 'express';
import { uploadDocument, getChunks } from '../controllers/documentController';

const router = express.Router();

router.post('/upload', uploadDocument as RequestHandler);
router.get('/:documentId/chunks', getChunks);

export default router;
import express from 'express';
import { AuthMiddleware } from '../middlewares/auth';

import { authRoutes } from './authRoutes';
import { optionRoutes } from './optionRoutes';
import { contextRoutes } from './contextRoutes';

const router = express.Router();
const auth = new AuthMiddleware();

router.use('/auth', authRoutes);
router.use('/option', auth.verifyToken, optionRoutes);
router.use('/context', auth.verifyToken, contextRoutes);

export default router
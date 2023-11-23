import express from 'express';
import { AuthMiddleware } from '../middlewares/auth';

import { authRoutes } from './authRoutes';
import { optionRoutes } from './optionRoutes';
import { promptRoutes } from './promptRoutes';

const router = express.Router();
const auth = new AuthMiddleware();

router.use('/auth', authRoutes);
router.use('/option', auth.verifyToken, optionRoutes);
router.use('/prompt', auth.verifyToken, promptRoutes);

router.use

export default router
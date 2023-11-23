import express from 'express';
import { ContextService } from '../services/contextService';

const router = express.Router();

const contextService = new ContextService();

router.post('/create', async (req, res) => {
  try {
    const result = await contextService.createContext(req.body);
    res.status(200).json(result);
  } catch (error: any) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/findAll', async (req, res) => {
  try {
    const result = await contextService.getContexts();
    res.status(200).json(result);
  } catch (error: any) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/findById/:id', async (req, res) => {
  try {
    const result = await contextService.getContextById(req.params.id);
    res.status(200).json(result);
  } catch (error: any) {
    console.log(error);
    res.status(500).json(error);
  }
});

export const contextRoutes = router;
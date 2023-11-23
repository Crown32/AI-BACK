import express from 'express';
import { PromptService } from '../services/promptService';

const router = express.Router();

const promptService = new PromptService();

router.post('/create', async (req, res) => {
  try {
    const result = await promptService.createPrompt(req.body);
    res.status(200).json(result);
  } catch (error: any) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/findAll', async (req, res) => {
  try {
    const result = await promptService.getPrompts();
    res.status(200).json(result);
  } catch (error: any) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/findById/:id', async (req, res) => {
  try {
    const result = await promptService.getPromptById(req.params.id);
    res.status(200).json(result);
  } catch (error: any) {
    console.log(error);
    res.status(500).json(error);
  }
});

export const promptRoutes = router;
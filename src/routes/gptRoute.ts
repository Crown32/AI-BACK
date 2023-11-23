import express from 'express';
import { GPTService } from '../services/gptService';

const router = express.Router();
const gptService = new GPTService();

router.post('/getResponse', async (req, res) => {
  try {
    const result = await gptService.getResponse(req.body);
    res.status(200).json(result);
  } catch (error: any) {
    console.log(error);
    res.status(500).json(error);
  }
});

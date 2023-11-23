import express from 'express';
import { OptionService } from '../services/optionService';

const router = express.Router();

const optionService = new OptionService();

router.post('/create', async (req, res) => {
  try {
    const result = await optionService.createOption(req.body);
    res.status(200).json(result);
  } catch (error: any) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/findAll', async (req, res) => {
  try {
    const result = await optionService.getOptions();
    res.status(200).json(result);
  } catch (error: any) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/findById/:id', async (req, res) => {
  try {
    const result = await optionService.getOptionById(req.params.id);
    res.status(200).json(result);
  } catch (error: any) {
    console.log(error);
    res.status(500).json(error);
  }
});

export const optionRoutes = router;
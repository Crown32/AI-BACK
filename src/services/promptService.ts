import { Prompt, IPrompt } from '../models/Prompt';

export class PromptService {
  constructor() { }

  async createPrompt(prompt: IPrompt) {
    const newPrompt = new Prompt(prompt);

    const promptSaved = await newPrompt.save();

    return promptSaved;
  }

async getPrompts() {
    const prompts = await Prompt.find();

    return prompts;
  }

  async getPromptById(id: string) {
    const prompt = await Prompt.findById(id);

    return prompt;
  }

  async updatePrompt(id: string, prompt: IPrompt) {
    const promptToUpdate = await this.getPromptById(id);

    if (!promptToUpdate) throw { message: 'Prompt não encontrado' };

    promptToUpdate.name = prompt.name;
    promptToUpdate.description = prompt.description;
    promptToUpdate.value = prompt.value;
    promptToUpdate.active = prompt.active;
    
    const promptUpdated = await promptToUpdate.save();

    return promptUpdated;
  }
    
}
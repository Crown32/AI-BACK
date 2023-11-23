import { ChatGPTAPI } from 'chatgpt';
import { IUserPromptDto } from '../models/UserPromptDto';
import { ContextService } from './contextService';

export class GPTService {
  private chatGPTAPI: ChatGPTAPI;

  private contextService: ContextService;

  constructor() {
    const completionParams = {
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ["\n", " Human:", " AI:"] // Stop on new line or Human: or AI:
    }

    this.chatGPTAPI = new ChatGPTAPI({apiKey:process.env.GPT_TOKEN || '' , completionParams});
    this.contextService = new ContextService();
  }

  async getResponse(userContext: IUserPromptDto) {

    const activeContext = await this.contextService.getActiveContext();

    if (!activeContext) throw { message: 'Context não encontrado' };

    const contextText = activeContext.value;

    const context = activeContext.value.replace("{{ESPECIALIDADE}}", userContext.especialidade.value)
      .replace("{{ESTILO}}", userContext.estilo.value)
      .replace("{{PUBLICO}}", userContext.publico.value);

    const response = await this.chatGPTAPI.sendMessage(userContext.userText, { systemMessage: context });

    return response;
  }
}
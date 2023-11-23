import { IOption } from './Option';

export interface IUserPromptDto {
  userText: string;
  especialidade: IOption;
  estilo: IOption;
  publico: IOption;
}
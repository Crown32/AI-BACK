import { Model, Schema, model } from 'mongoose';
import { IBaseModel } from './BaseModel';

export interface IPrompt extends IBaseModel {
  value: string;
  active: boolean;
  name: string;
  description: string;
}

const promptSchema: Schema = new Schema<IPrompt>({
  value: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  description: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export const Prompt: Model<IPrompt> = model<IPrompt>('t_prompt', promptSchema);
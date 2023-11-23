import { IBaseModel } from './BaseModel';
import { CategoryEnum } from './enums/categoryEnum';

import { model, Schema, Model } from 'mongoose';

export interface IOption extends IBaseModel {
  name: string;
  description: string;
  emoji: string;
  category: CategoryEnum;
  value: string;
}

const optionSchema: Schema = new Schema<IOption>({
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
  emoji: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 5,
  },
  category: {
    type: String,
    required: true,
    enum: Object.values(CategoryEnum),
  },
  value: {
    type: String,
    required: true,
    min: 3,
    max: 255,
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

export const Option: Model<IOption> = model<IOption>('t_option', optionSchema);
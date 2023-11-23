import { Model, Schema, model } from 'mongoose';
import { IBaseModel } from './BaseModel';


// Example context value: "Escreva um texto sobre {{ESPECIALIDADE}} usando um estilo {{ESTILO}} para um público {{PUBLICO}}."
export interface IContext extends IBaseModel {
  value: string;
  active: boolean;
  name: string;
  description: string;
}

const contextSchema: Schema = new Schema<IContext>({
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

export const Context: Model<IContext> = model<IContext>('t_context', contextSchema);
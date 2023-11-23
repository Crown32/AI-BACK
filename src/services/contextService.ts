import { Context, IContext } from '../models/Context';

export class ContextService {
  constructor() { }

  async createContext(context: IContext) {
    const newContext = new Context(context);

    const contextSaved = await newContext.save();

    return contextSaved;
  }

  async getContexts() {
    const contexts = await Context.find();

    return contexts;
  }

  async getContextById(id: string) {
    const context = await Context.findById(id);

    return context;
  }

  async updateContext(id: string, context: IContext) {
    const contextToUpdate = await this.getContextById(id);

    if (!contextToUpdate) throw { message: 'Context não encontrado' };

    contextToUpdate.name = context.name;
    contextToUpdate.description = context.description;
    contextToUpdate.value = context.value;
    contextToUpdate.active = context.active;

    const contextUpdated = await contextToUpdate.save();

    return contextUpdated;
  }

  async getActiveContext() {
    const activeContext = await Context.findOne({ active: true });

    return activeContext;
  }

  async activateContext(id: string) {
    const contextToActivate = await this.getContextById(id);
    const activeContext = await this.getActiveContext();

    if (!contextToActivate) throw { message: 'Context não encontrado' };

    if (activeContext) {
      activeContext.active = false;
      await activeContext.save();
    }

    contextToActivate.active = true;

    const contextActivated = await contextToActivate.save();

    return contextActivated;
  }

}
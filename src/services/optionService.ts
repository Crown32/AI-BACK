import { Option, IOption } from '../models/Option';

export class OptionService {
  constructor() { }

  async createOption(option: IOption) {
    const newOption = new Option(option);

    const optionSaved = await newOption.save();

    return optionSaved;
  }

  async getOptions() {
    const options = await Option.find();

    return options;
  }

  async getOptionById(id: string) {
    const option = await Option.findById(id);

    return option;
  }

  async updateOption(id: string, option: IOption) {
    const optionToUpdate = await this.getOptionById(id);

    if (!optionToUpdate) throw { message: 'Option não encontrado' };

    optionToUpdate.name = option.name;
    optionToUpdate.description = option.description;
    optionToUpdate.emoji = option.emoji;
    optionToUpdate.category = option.category;
    optionToUpdate.value = option.value;
    
    const optionUpdated = await optionToUpdate.save();

    return optionUpdated;
  }
    
}
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from 'src/dto/create-dto';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model) {}
  async findAll(): Promise<Todo[]> {
    return await this.todoModel.find();
  }
  async findOne(id: string): Promise {
    return await this.todoModel.findOne({ _id: id });
  }
  async create(item: CreateItemDto): Promise {
    const newTodo = new this.todoModel(item);
    return await newTodo.save();
  }
  async delete(id: string): Promise {
    return await this.todoModel.findByIdAndRemove(id);
  }
  async update(id: string, todo: CreateItemDto): Promise {
    return await this.todoModel.findByIdAndUpdate(id, todo, { new: true });
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTodoDto } from './todos.dtos';
import { Todo } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  getTodos() {
    return this.todoRepository.find();
  }

  createTodo(createTodoDto: CreateTodoDto) {
    const newUser = this.todoRepository.create(createTodoDto);
    return this.todoRepository.save(newUser);
  }

  findTodosById(id: number) {
    return this.todoRepository.findOne(id);
  }
}

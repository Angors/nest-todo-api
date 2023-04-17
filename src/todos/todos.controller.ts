import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './todos.dtos';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  getUsers() {
    return this.todoService.getTodos();
  }

  @Get('id/:id')
  findUsersById(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.findTodosById(id);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createUsers(@Body() createtodoDto: CreateTodoDto) {
    return this.todoService.createTodo(createtodoDto);
  }
}

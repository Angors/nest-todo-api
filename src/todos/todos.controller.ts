import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateItemDto } from 'src/dto/create-dto';

@Controller('todo')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise {
    return this.todosService.findOne(id);
  }

  @Post()
  create(@Body() createTodoDto: CreateItemDto): Promise {
    return this.todosService.create(createTodoDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise {
    return this.todosService.delete(id);
  }

  @Put(':id')
  update(@Body() updateTodoDto: CreateItemDto, @Param('id') id): Promise {
    return this.todosService.update(id, updateTodoDto);
  }
}

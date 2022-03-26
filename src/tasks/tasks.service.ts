import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) {}

  create(createTaskInput: CreateTaskInput) {
    const task = new Task();
    task.title = createTaskInput.title;
    task.description = createTaskInput.description;

    return this.taskRepository.save(task);
  }

  findAll() {
    return this.taskRepository.find();
  }

  async findOne(id: number) {
    const result = await this.taskRepository.findOne({ where: { id } });
    return result;
  }

  update(id: number, updateTaskInput: UpdateTaskInput) {
    return this.taskRepository.update({ id }, updateTaskInput);
  }

  async remove(id: number) {
    const task = await this.taskRepository.findOneBy({ id });
    if (task === null) return;
    return this.taskRepository.remove(task);
  }
}

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

  create(createTaskInput: CreateTaskInput, user) {
    const task = new Task();
    task.title = createTaskInput.title;
    task.description = createTaskInput.description;
    task.user = user;

    return this.taskRepository.save(task);
  }

  findAll(user) {
    return this.taskRepository.find({
      where: { user },
    });
  }

  async findOne(id: number, user) {
    const result = await this.taskRepository.findOne({ where: { id, user } });
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

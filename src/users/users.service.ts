import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  create(createUserInput: CreateUserInput) {
    const user = new User();
    user.firstName = createUserInput.firstName;
    user.lastName = createUserInput.lastName;
    user.username = createUserInput.username;
    user.password = createUserInput.password;

    return this.usersRepository.save(user);
  }

  findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({ username });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

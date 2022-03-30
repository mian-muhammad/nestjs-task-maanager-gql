import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType({ description: 'Task' })
@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'Primary key' })
  id: number;

  @Field({ description: 'Title of task' })
  @Column()
  title: string;

  @Field({ description: 'Description of task' })
  @Column()
  description: string;

  @Field({ description: 'Status of task' })
  @Column({ default: false })
  completed: boolean;

  @ManyToOne(() => User, (user) => user.tasks, { eager: true })
  user: User;
}

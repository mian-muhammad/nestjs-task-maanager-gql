import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType({ description: 'Task' })
@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  // @Column()
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
}

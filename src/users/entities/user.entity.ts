import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
@ObjectType({ description: 'Task' })
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'Primary Key' })
  id: number;

  @Column()
  @Field({ description: 'First Name' })
  firstName: string;

  @Column()
  @Field({ description: 'Last Name' })
  lastName: string;

  @Column({ unique: true })
  @Field({ description: 'User Name' })
  username: string;

  @Column()
  @Field({ description: 'Password' })
  password: string;

  @Column({ default: true })
  @Field({ description: `User's profile status` })
  isActive: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }
}

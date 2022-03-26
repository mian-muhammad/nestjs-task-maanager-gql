import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
  @Field({ description: 'Title of task' })
  title: string;

  @Field({ description: 'Description of task' })
  description: string;
}

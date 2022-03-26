import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ description: 'First Name' })
  firstName: string;

  @Field({ description: 'Last Name' })
  lastName: string;

  @Field({ description: 'User Name' })
  username: string;

  @Field({ description: 'Password' })
  password: string;
}

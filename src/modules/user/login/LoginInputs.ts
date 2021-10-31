import { IsEmail } from 'class-validator';
import { Field, InputType } from 'type-graphql';
// import { IsNotValidEmail } from './isNotValidEmail';


@InputType()
export class LoginInput {
  @Field()
  @IsEmail()
  // @IsNotValidEmail({ message: 'Email is not registered' })
  email: string;

  @Field()
  password: string;
}

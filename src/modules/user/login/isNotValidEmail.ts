import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { User } from '../../../entity/User';

@ValidatorConstraint({ async: true })
export class NotValidEmailConstraint
  implements ValidatorConstraintInterface
{
  validate(email: string) {
    return User.findOne({ where: { email } }).then((user) => {
      if (user) return true;
      return false;
    });
  }
}

export function IsNotValidEmail(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: NotValidEmailConstraint,
    });
  };
}

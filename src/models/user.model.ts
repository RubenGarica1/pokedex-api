import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  password?: string;

  @property({
    type: 'number',
  })
  level?: number;

  @property({
    type: 'boolean',
  })
  hasAccount: boolean;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

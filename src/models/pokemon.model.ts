import {Entity, model, property} from '@loopback/repository';

@model()
export class Pokemon extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  _id?: String;

  @property({
    type: 'number',
  })
  id?: String;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  image?: string;

  @property({
    type: 'string',
  })
  height?: string;

  @property({
    type: 'string',
  })
  weight?: string;

  @property({
    type: 'any',
  })
  types?: any;

  @property({
    type: 'any',
  })
  shiny?: any;

  @property({
    type: 'any',
  })
  photo: any;

  constructor(data?: Partial<Pokemon>) {
    super(data);
  }
}

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {User} from '../models/user.model';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(User, dataSource);
  }
}

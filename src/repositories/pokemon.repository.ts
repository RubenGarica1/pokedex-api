import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Pokemon} from '../models/pokemon.model';

export class PokemonRepository extends DefaultCrudRepository<
  Pokemon,
  typeof Pokemon.prototype.id
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Pokemon, dataSource);
  }
}

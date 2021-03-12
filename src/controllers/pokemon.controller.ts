import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  param,
  post,
  requestBody,
  response,
} from '@loopback/rest';
import {Pokemon} from '../models/pokemon.model';
import {PokemonRepository} from '../repositories/pokemon.repository';

export class PokemonController {
  constructor(
    @repository(PokemonRepository)
    public pokemonRepository: PokemonRepository,
  ) {}

  @post('/pokemon')
  @response(200, {
    description: 'Pokemon model instance',
    content: {'application/json': {schema: getModelSchemaRef(Pokemon)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pokemon, {
            title: 'NewPokemon',
          }),
        },
      },
    })
    pokemon: Pokemon,
  ): Promise<Pokemon> {
    return this.pokemonRepository.create(pokemon);
  }

  @get('/pokemon/count')
  @response(200, {
    description: 'Pokemon model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Pokemon) where?: Where<Pokemon>): Promise<Count> {
    return this.pokemonRepository.count(where);
  }

  @get('/pokemon')
  @response(200, {
    description: 'Array of Pokemon model instances',
    content: {
      'application/json': {
        schema: {
          items: getModelSchemaRef(Pokemon),
        },
      },
    },
  })
  async find(
    @param.filter(Pokemon) filter?: Filter<Pokemon>,
  ): Promise<Pokemon[]> {
    return this.pokemonRepository.find();
  }
}

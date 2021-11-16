/* eslint-disable class-methods-use-this */
import { Query, Resolver } from 'type-graphql';
import Wilder from '../graphql_entities/Wilder';
import WilderModel from '../models/Wilder';

@Resolver(Wilder)
class WilderResolver {
  @Query(() => [Wilder])
  async allWilders() {
    const wilders = await WilderModel.find();
    return wilders;
  }
}

export default WilderResolver;

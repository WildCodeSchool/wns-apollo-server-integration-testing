/* eslint-disable class-methods-use-this */
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import CreateWilderInput from '../graphql_types/CreateWilderInput';
import Wilder from '../graphql_types/Wilder';
import WilderModel from '../models/Wilder';

@Resolver(Wilder)
class WilderResolver {
  @Query(() => [Wilder])
  async allWilders() {
    const wilders = await WilderModel.find();
    return wilders;
  }

  @Mutation(() => Wilder)
  async createWilder(
    @Arg('input') createWilderInput: CreateWilderInput
  ): Promise<Wilder> {
    const newWilder = new WilderModel(createWilderInput);
    await newWilder.save();
    return newWilder;
  }
}

export default WilderResolver;

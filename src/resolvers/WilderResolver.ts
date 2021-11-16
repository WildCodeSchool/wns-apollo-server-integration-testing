import { Query, Resolver } from "type-graphql";
import Wilder from "../graphql_entities/Wilder";
import WilderModel from "../models/Wilder";

@Resolver(Wilder)
class WilderResolver {
  @Query(() => [Wilder])
  // eslint-disable-next-line class-methods-use-this
  async allWilders() {
    const wilders = await WilderModel.find();
    return wilders;
  }
}

export default WilderResolver;

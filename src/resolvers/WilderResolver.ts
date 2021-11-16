import { Query, Resolver } from "type-graphql";
import Wilder from "../graphql_entities/Wilder";
import WilderModel from "../models/Wilder"

@Resolver(Wilder)
class WilderResolver {
    @Query(returns => [Wilder])
    async allWilders() {
        console.log("get all wilders")
        const wilders = await WilderModel.find()
        return wilders
    }
}

export default WilderResolver
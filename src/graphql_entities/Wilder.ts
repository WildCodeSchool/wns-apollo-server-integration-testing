import { Field, ID, ObjectType } from "type-graphql"
import Skill from "./Skill"

@ObjectType()
class Wilder {
    @Field(type => ID)
    id!: string
    @Field()
    name!: string
    @Field()
    city!: string
    @Field(type => [Skill])
    skills!: Skill[]
}

export default Wilder;
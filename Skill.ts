import { Field, ID, Int, ObjectType } from "type-graphql"

@ObjectType()
class Skill {
    @Field(type => ID)
    id!: string
    @Field()
    title!: string
    @Field(type => Int)
    votes!: number
}

export default Skill;
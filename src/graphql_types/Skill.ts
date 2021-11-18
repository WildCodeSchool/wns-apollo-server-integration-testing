import { Field, ID, Int, ObjectType } from 'type-graphql';

@ObjectType()
class Skill {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => ID)
  _id!: string;

  @Field()
  title!: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => Int)
  votes!: number;
}

export default Skill;

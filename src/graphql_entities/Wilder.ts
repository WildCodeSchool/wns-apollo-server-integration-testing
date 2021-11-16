import { Field, ID, ObjectType } from 'type-graphql';
import Skill from './Skill';

@ObjectType()
class Wilder {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => ID)
  id!: string;

  @Field()
  name!: string;

  @Field()
  city!: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => [Skill])
  skills!: Skill[];
}

export default Wilder;

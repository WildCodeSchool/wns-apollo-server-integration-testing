import { Field, InputType } from 'type-graphql';
import Wilder from './Wilder';

@InputType({ description: 'New wilder data' })
class CreateWilderInput implements Partial<Wilder> {
  @Field()
  name!: string;

  @Field()
  city!: string;
}

export default CreateWilderInput;

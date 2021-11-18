import { ApolloServer, gql } from 'apollo-server';
import createServer from '../server';
import WilderModel from '../models/Wilder';

let server: ApolloServer;

beforeAll(async () => {
  server = await createServer();
});

describe('wilder resolver', () => {
  describe('mutation createWilder', () => {
    it('adds a new wilder to database', async () => {
      const createWilderMutation = gql`
        mutation CreateWilder($input: CreateWilderInput!) {
          createWilder(input: $input) {
            _id
            name
            city
          }
        }
      `;

      const variables = { input: { name: 'Jane Doe', city: 'Paris' } };

      const res = await server.executeOperation({
        query: createWilderMutation,
        variables,
      });

      const wilderFromResponse = res.data?.createWilder;

      expect(res.data?.createWilder).toEqual(
        expect.objectContaining({ name: 'Jane Doe', city: 'Paris' })
      );

      // eslint-disable-next-line no-underscore-dangle
      const wilderInDb = await WilderModel.findById(wilderFromResponse._id);

      expect(wilderInDb?.name).toBe(wilderFromResponse.name);
    });
  });
});

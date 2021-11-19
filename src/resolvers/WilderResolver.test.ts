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
  describe('query all wilders', () => {
    it('returns all wilders from database', async () => {
      const wilder1Data = { name: 'Jane Doe', city: 'Paris' };
      const wilder2Data = { name: 'John Doe', city: 'Paris' };
      const wilder1InDb = new WilderModel(wilder1Data);
      const wilder2InDb = new WilderModel(wilder2Data);
      await wilder1InDb.save();
      await wilder2InDb.save();

      const allWildersQuery = gql`
        query allWilders {
          allWilders {
            _id
            name
            city
          }
        }
      `;

      const res = await server.executeOperation({
        query: allWildersQuery,
      });

      expect(res.data?.allWilders).toEqual([
        expect.objectContaining(wilder1Data),
        expect.objectContaining(wilder2Data),
      ]);
      // eslint-disable-next-line no-underscore-dangle
      expect(res.data?.allWilders[0]._id).toBe(wilder1InDb._id.toString());
    });
  });
});

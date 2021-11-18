import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import WilderResolver from './resolvers/WilderResolver';

async function createServer() {
  const schema = await buildSchema({
    resolvers: [WilderResolver],
  });
  // Create the GraphQL server
  const server = new ApolloServer({ schema });
  return server;
}

export default createServer;

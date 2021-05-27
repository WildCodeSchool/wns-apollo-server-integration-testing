import { ApolloServer } from "apollo-server";
import "reflect-metadata";
import mongoose from "mongoose";
import { buildSchema } from "type-graphql";
import WilderResolver from "./WilderResolver";

async function start () {

    // Database
mongoose
    .connect('mongodb://127.0.0.1:27017/wilderdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
    })
// eslint-disable-next-line no-console
.then(() => console.log('Connected to database'))
// eslint-disable-next-line no-console
.catch((err: Error) => console.log(err));

    const schema = await buildSchema({
        resolvers: [WilderResolver],
      });
      // Create the GraphQL server
    const server = new ApolloServer({
        schema,
        playground: true,
    });

    // Start the server
    const { url } = await server.listen(4000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}

start()

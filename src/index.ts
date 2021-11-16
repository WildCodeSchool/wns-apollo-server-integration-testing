import "reflect-metadata";

import createConnection from "./createConnection";
import createServer from "./server";

async function start() {
  await createConnection("mongodb://127.0.0.1:27017/wilderdb");

  const server = await createServer();

  // Start the server
  const { url } = await server.listen(4000);
  // eslint-disable-next-line no-console
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

start();
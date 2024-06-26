import { ApolloServer } from 'apollo-server-koa';
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import Koa from 'koa';
import http from 'http';
import { typeDefs } from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import bodyParser from 'koa-bodyparser';
async function startApolloServer(typeDefs: string, resolvers: any) {
  const httpServer = http.createServer();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  await server.start();
  const app = new Koa();
  app.use(bodyParser());
  app.use(async (ctx, next) => {
    let postData = ctx.request.body;
    console.log('postdata', postData);
    await next();
  });
  server.applyMiddleware({ app });
  httpServer.on('request', app.callback());
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}
startApolloServer(typeDefs, resolvers);

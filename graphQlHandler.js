import { GraphQLServerLambda } from "graphql-yoga";
import schema from "./schema";

const lambda = new GraphQLServerLambda({
  typeDefs: schema.schema,
  resolvers: {
    Query: {
      hello: (_, { name }) => {
        return `Hello ${name}`;
      },
    },
  },
});

export const server = lambda.graphqlHandler;
export const playground = lambda.playgroundHandler;

import { GraphQLServerLambda } from "graphql-yoga";
import schema from "./schema";

// Resolvers
import { Query } from "./resolvers";

const lambda = new GraphQLServerLambda({
  typeDefs: schema.schema,
  resolvers: {
    Query,
  },
});

export const server = lambda.graphqlHandler;
export const playground = lambda.playgroundHandler;

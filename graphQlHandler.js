import { GraphQLServerLambda } from "graphql-yoga";
import schema from "./schema";

// Resolvers
import { Query, Mutation } from "./resolvers";

const lambda = new GraphQLServerLambda({
  typeDefs: schema.schema,
  resolvers: {
    Query,
    Mutation,
  },
});

export const server = lambda.graphqlHandler;
export const playground = lambda.playgroundHandler;

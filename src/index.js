import { GraphQLServer } from "graphql-yoga";
import uuidv4 from "uuid/v4";
import db from "./db";
import Query from "./resolvers/Query";
import Comment from "./resolvers/Comment";
import Post from "./resolvers/Post";
import User from "./resolvers/User";
import Mutation from "./resolvers/Mutation";

const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers: {
        Query,
        Mutation,
        Post,
        Comment,
        User
    },
    context: { db }
});

server.start(({ port }) => console.log("The server is up", port));

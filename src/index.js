import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
    type Query {
        post: Post!
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean
    }
`;

const resolvers = {
    Query: {
        post: () => ({
            id: "3535",
            title: "This title",
            body: "Oh hello this is the body",
            published: true
        })
    }
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => console.log("The server is up"));

import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
    type Query {
        greeting(name: String, job: String): String!
        add(a: Float!, b: Float!) : Float!
        grades: [Int!]!
        post: Post!
        me: User!
    }

    type User {
        id: ID!
        name: String!
        age: Int!
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
        }),
        me: () => ({
            id: "3435",
            name: "Josh",
            age: 25
        }),
        greeting: (parent, args, ctx, info) => {
            if (args.name) return `Hello ${args.name}!`;
            else return `Hello`;
        },
        add: (undefined, { a, b }) => {
            return a + b;
        },
        grades: (parent, args, ctx, info) => {
            return [99, 80, 95];
        }
    }
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => console.log("The server is up"));

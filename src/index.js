import { GraphQLServer } from "graphql-yoga";

const users = [
    {
        id: "1",
        name: "Joshua Rippon",
        age: 25,
        email: "joshuarippon1@gmail.com"
    },
    {
        id: "2",
        name: "Sarah Silverman",
        age: 23,
        email: "sarah@example.com"
    },
    {
        id: "3",
        name: "George Washington",
        age: 21,
        email: "george@example.com"
    }
];

const posts = [
    {
        id: "1",
        title: "My first post",
        body: "This is my first post",
        published: true,
        author: "1"
    },
    {
        id: "2",
        title: "My second post",
        body: "This is my second post",
        published: true,
        author: "1"
    },
    {
        id: "3",
        title: "My third post",
        body: "This is my second post",
        published: true,
        author: "2"
    }
];

const comments = [
    {
        id: "101",
        text: "That sucks..."
    },
    {
        id: "102",
        text: "No it doesn't!"
    },
    {
        id: "103",
        text: "Yes it does."
    },
    {
        id: "10s4",
        text: "No you are lying"
    }
];

const typeDefs = `
    type Query {
        users(query: String): [User!]!
        posts(query: String): [Post!]!
        comments(query: String): [Comment!]!
        post: Post!
        me: User!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int!
        posts: [Post!]!
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        author: User!
        published: Boolean
    }
    
    type Comment {
        id: ID!
        text: String!
    }
`;

const resolvers = {
    Query: {
        users: (parent, args, ctx, info) => {
            return args.query
                ? users.filter(user =>
                      user.name.toLowerCase().includes(args.query.toLowerCase())
                  )
                : users;
        },
        posts: (parent, args, ctx, infor) => {
            return args.query
                ? posts.filter(post => {
                      return (
                          post.title
                              .toLowerCase()
                              .includes(args.query.toLowerCase()) ||
                          post.body
                              .toLowerCase()
                              .includes(args.query.toLowerCase())
                      );
                  })
                : posts;
        },
        comments: (parent, args, ctx, infor) => {
            return comments;
        },
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
        })
    },
    Post: {
        author: (parent, args, ctx, info) => {
            return users.find(user => user.id === parent.author);
        }
    },
    User: {
        posts: (parent, args, ctx, info) => {
            return posts.filter(post => {
                return post.author === parent.id;
            });
        }
    }
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => console.log("The server is up"));

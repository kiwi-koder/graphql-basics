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
        text: "That sucks...",
        author: "1",
        post: "1"
    },
    {
        id: "102",
        text: "No it doesn't!",
        author: "2",
        post: "1"
    },
    {
        id: "103",
        text: "Yes it does.",
        author: "1",
        post: "1"
    },
    {
        id: "104",
        text: "No you are lying",
        author: "3",
        post: "1"
    }
];

const db = { users, comments, posts };

export default db;

import uuidv4 from "uuid/v4";

export default {
    createUser: (parent, args, { db }, info) => {
        const emailTaken = db.users.some(
            user => user.email === args.data.email
        );

        if (emailTaken) throw new Error("Email Taken.");

        const user = {
            id: uuidv4(),
            ...args.data
        };

        db.users.push(user);
        return user;
    },
    createPost: (parent, args, { db }, info) => {
        const userExists = db.users.some(user => user.id === args.data.author);

        if (!userExists) throw new Error("User not found.");

        const post = {
            id: uuidv4(),
            ...args.data
        };

        db.posts.push(post);
        return post;
    },

    createComment: (parent, args, { db }, info) => {
        const userExists = db.users.some(user => user.id === args.data.author);
        const postExists = db.posts.some(post => post.id === args.data.post);

        if (!userExists) throw new Error("User not found.");
        if (!postExists) throw new Error("Post does not exist");

        const comment = {
            id: uuidv4(),
            ...args.data
        };

        db.comments.push(comment);
        return comment;
    },
    deleteUser: (parent, args, { db }, info) => {
        const userIndex = db.users.findIndex(user => user.id === args.id);

        if (userIndex === -1) throw new Error("User not found!");

        const [deletedUser] = db.users.splice(userIndex, 1);

        posts = db.posts.filter(post => {
            const match = post.author === deletedUser.id;
            if (match) {
                db.comments = db.comments.filter(
                    comment => comment.post !== post.id
                );
            }

            return !match;
        });

        db.comments = db.comments.filter(
            comment => comment.author !== deletedUser.id
        );

        return deletedUser;
    },
    deletePost: (parent, args, { db }, info) => {
        const postIndex = db.posts.findIndex(post => post.id === args.id);

        if (postIndex === -1) throw new Error("Post not found");

        const [deletedPost] = db.posts.splice(postIndex, 1);

        db.comments = db.comments.filter(
            comment => comment.post !== deletedPost.id
        );

        return deletedPost;
    }
};

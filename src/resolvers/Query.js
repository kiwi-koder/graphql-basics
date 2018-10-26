export default {
    users: (parent, args, { db }, info) => {
        return args.query
            ? db.users.filter(user =>
                  user.name.toLowerCase().includes(args.query.toLowerCase())
              )
            : db.users;
    },
    posts: (parent, args, { db }, infor) => {
        return args.query
            ? db.posts.filter(post => {
                  return (
                      post.title
                          .toLowerCase()
                          .includes(args.query.toLowerCase()) ||
                      post.body.toLowerCase().includes(args.query.toLowerCase())
                  );
              })
            : db.posts;
    },
    comments: (parent, args, { db }, infor) => {
        return db.comments;
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
};


const { UserList, ItemList } = require('../data/fake-data');
const _ = require('lodash');

const resolvers = {
    Query : {
        users: () => {
            return  UserList;
        },
        user: (parent, args) => {
            const user_id = args.id;
            const user = _.find(UserList, { id: Number(user_id) });
            return user;
        },

        

        items: () => {
            return  ItemList;
        },
        item: (parent, args) => {
            const name = args.name;
            const item = _.find(ItemList, { name });
            return item;
        }
    },
    User: {
        items: () => {
            return _.filter(ItemList, (item) => item.recycle === false);
        }
    },
    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            console.log(user);
            const lastId = UserList[UserList.length - 1].id;
            user.id = lastId + 1;
            UserList.push(user);
            return user;
        },
        updateUser: (parent, args) => {
            const {id, username}  = args.input;
            let updatedUser;

            UserList.forEach((user) => {
                if (Number(id) === user.id) {
                    user.username = username;
                    updatedUser = user;
                }
            })

            console.log(updatedUser);

            return updatedUser;
        },
        deleteUser: (parent, args) => {
            const id  = args.id;
            _.remove(UserList, (user) => user.id === Number(id));
            return null;
        }
    }
}

module.exports = {
    resolvers
}
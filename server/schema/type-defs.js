const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        role: Role!
        children: [User]
        items: [Item]
    }

    type Item {
        id: ID!
        name: String!
        description: String
        recycle: Boolean
        cost: Float
    }

    type Query {
        users: [User!]!
        user(id: ID!): User
        items: [Item!]!
        item(name: String!): Item
    }

    input CreateUserInput {
        name: String!
        username: String!
        age: Int = 18
        role: Role = HUMAN
    }

    input UpdateUserUsernameInput {
        id: ID!
        username: String!
    }

    type Mutation {
        createUser(input: CreateUserInput!): User!
        updateUser(input: UpdateUserUsernameInput!): User!
        deleteUser(id: ID!): User
    }

    enum Role {
        ADMIN
        HUMAN
        DOG
        BOY
        CAT
    }
`

module.exports = {
    typeDefs
}
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedbooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    profiles: [User]!
    profile(userId: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    addProfile(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSkill(userId: ID!, book: String!): User
    removeUser: User
    removeBook(book: String!): User
  }
`;

module.exports = typeDefs;

// schema/schema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID
    username: String
    email: String
  }

  type Query {
    getUsers: [User]
  }
`;

module.exports = typeDefs;

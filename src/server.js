// server.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers/userResolvers');
const sequelize = require('./database'); // Import your Sequelize database connection

const app = express();

// Create a Sequelize instance and authenticate the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the MySQL database');
  })
  .catch((err) => {
    console.error('Error connecting to the database: ', err);
  });

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});

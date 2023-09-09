// resolvers/userResolvers.js
const { User } = require('../models'); // Define your Sequelize model here

const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = await User.findAll();
        return users;
      } catch (error) {
        throw new Error('Error fetching users from the database');
      }
    },
  },
};

module.exports = resolvers;

const { Book, User } = require('../models');

const resolvers = {
  Query: {
    books: async () => {
      return Book.find().sort({ _id: -1 });
    },

    book: async (parent, { targetId }) => {
      return Book.findOne({ _id: targetId });
    },
    users: async () => {
      return User.find().sort({ _id: -1 });
    },

    user: async (parent, { targetId }) => {
      return User.findOne({ _id: targetId });
    },
  },

  Mutation: {
    addBook: async (parent, { description, bookId, title }) => {
      return Book.create({ description, bookId, title });
    },
    addUser: async (parent, { username, email, password }) => {
      return User.create({ username, email, password });
    },
    saveBook: async (parent, { userId, bookId }) => {
      const book = Book.findOne({_id: bookId});
      if(!book) return;
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { savedBooks: { book } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeBook: async (parent, { bookId }) => {
      return Book.findOneAndDelete({ _id: bookId });
    },
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
    removeSavedBook: async (parent, { userId, bookId }) => {
      
      const book = Book.findOne({_id: bookId});
      if(!book) return;
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { savedBooks: { _id: bookId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;

const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Book {
    _id: ID
    authors: [String]!
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    books: [Book]!
    book(Book: ID!): Book
    users: [User]!
    user(User: ID!): User
  }

  type Mutation {
    addBook(description: String!, bookId: String!, title: String!): Book
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(userId: ID!, bookId: ID!): User
    removeBook(bookId: ID!): Book
    removeUser(userId: ID!): User
    removeSavedBook(userId: ID!, bookId: ID!): User
  }
`;

module.exports = typeDefs;

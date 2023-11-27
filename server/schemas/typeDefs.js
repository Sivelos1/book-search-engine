const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  input BookInput {
    authors: [String]!
    description: String
    bookId: String
    image: String
    title: String
  }

  type Book {
    _id: ID
    authors: [String]!
    description: String
    bookId: String
    image: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me(targetId: ID!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(userId: String!, input: BookInput): User
    removeBook(userId: String!, bookId: String!): User
  }
`;

module.exports = typeDefs;

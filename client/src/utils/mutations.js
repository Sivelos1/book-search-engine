import { gql } from '@apollo/client';

export const ADD_BOOK = gql`
  mutation addBook($description: String!, $bookId: String!, $title: String!) {
    addBook(description: $description, bookId: $bookId, title: $title) {
      _id
      description
      bookId
      title
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
      password
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($userId: String!, $bookId: String!) {
    saveBook(userId: $userId, bookId: $bookId) {
      _id
      username
      savedBooks
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      description
      bookId
      title
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser($userId: String!) {
    removeUser(userId: $userId) {
      _id
      username
      email
    }
  }
`;

export const REMOVE_SAVED_BOOK = gql`
  mutation removeSavedBook($userId: String!, $bookId: String!) {
    removeSavedBook(userId: $userId, bookId: $bookId) {
      _id
      username
      savedBooks
    }
  }
`;

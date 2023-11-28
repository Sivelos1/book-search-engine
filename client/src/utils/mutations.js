import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user{
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: BookInput!, $userId: String!) {
    saveBook(input: $input, userId: $userId) {
      _id
      username
      savedBooks{
        title
        authors
        bookId
        description
        image
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($userId: String!, $bookId: String!) {
    removeBook(userId: $userId, bookId: $bookId) {
      _id
      username
      savedBooks {
        title
        bookId
        authors
        description
        image
      }
    }
  }
`;
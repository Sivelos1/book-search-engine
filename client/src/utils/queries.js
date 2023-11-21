import { gql } from '@apollo/client';

export const QUERY_BOOK = gql`
  query book {
    book {
      authors
      description
      bookId
      image
      link
      title
    }
  }
`;

export const QUERY_BOOKS = gql`
  query books($_id: String) {
    books(_id: $_id) {
      authors
      description
      bookId
      image
      link
      title
    }
  }
`;

export const QUERY_USER = gql`
  query user {
    user {
      username
      email
      password
      savedBooks
    }
  }
`;

export const QUERY_USERS = gql`
  query users($_id: String) {
    users(_id: $_id) {
      username
      email
      password
      savedBooks
    }
  }
`;

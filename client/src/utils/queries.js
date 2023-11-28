import { gql } from '@apollo/client';


export const GET_ME = gql`
query me($targetId: String!) {
  me(targetId: $targetId) {
    _id
    username
    email
    savedBooks {
      _id
      title
      bookId
      description
      authors
      image
    }
  }
}
`;
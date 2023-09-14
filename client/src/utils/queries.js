import { gql } from '@apollo/client';

export const USER = gql`
query User {
  user {
    _id
    email
    haikus {
      createdAt
      haikuText
      image
    }
    username
  }
}
`;

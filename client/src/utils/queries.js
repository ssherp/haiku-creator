import { gql } from '@apollo/client';

export const USER = gql`
query User {
  user {
    _id
    email
    haikus {
      line1
      line2
      line3
      createdAt
      
    }
    username
  }
}
`;

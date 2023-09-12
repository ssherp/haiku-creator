// import gql from apollo client
import { gql } from '@apollo/client';

export const USER = gql`
query User {
  user {
    _id
    email
    username
  }
}
`;

// import gql from apollo client
import { gql } from '@apollo/client';

export const ADD_USER=gql `mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`;

export const LOG_IN=gql`
mutation Mutation($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      _id
    }
  }
}

`;

export const SAVE_HAIKU=gql`
mutation SaveHaiku($line1: String, $line2: String, $line3: String, $createdAt: String) {
  saveHaiku(line1: $line1, line2: $line2, line3: $line3, createdAt: $createdAt) {
    username
  }
}
`;

export const REMOVE_HAIKU=gql`
mutation RemoveHaiku($id: ID!) {
  removeHaiku(_id: $id) {
    email
    username
  }
}
`;

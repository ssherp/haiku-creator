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

export const SAVE_HIAKU=gql`
mutation SaveHaiku($haikuText: String, $createdAt: String, $image: String) {
  saveHaiku(haikuText: $haikuText, createdAt: $createdAt, image: $image) {
    email
    username
    haikus {
      createdAt
      haikuText
      image
    }
  }
}
`;

export const REMOVE_HIAKU=gql`
mutation RemoveHaiku($id: ID!) {
  removeHaiku(_id: $id) {
    email
    username
  }
}
`;

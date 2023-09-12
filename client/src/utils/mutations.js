// import gql from apollo client
import { gql } from '@apollo/client';



export const LOGIN_IN= gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
  }
}
`;
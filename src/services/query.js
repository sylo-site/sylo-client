import { gql } from '@apollo/client';

export const getListUserQuery = gql`query ListUsers {
    listUsers {
      id
      email
      name
    }
  }`

  export const createUserMutation = gql`mutation CreateUser($email: String!, $name: String!, $password: String!) {
    createUser(email: $email, name: $name, password: $password) {
      email
      password
    }
  }`

  export const getUserToken = gql`query Query($email: String!, $password: String!) {
    getUserToken(email: $email, password: $password)
  }`

  /* export const getuser = gql`` */
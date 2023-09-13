import { useMutation, gql } from "@apollo/client";
import { Alert } from "react-native";
import { storage } from "../../App";

const LOGIN_MUTATION = gql`
  mutation MakeLogin($auth: LoginInput!) {
    login(data: $auth) {
      token
    }
  }
`;

export function useLoginMutation(email: string, password: string) {
  const [loginMutation, { data, loading, error }] = useMutation(
    LOGIN_MUTATION,
    {
      variables: { auth: { email: email, password: password } },
      errorPolicy: 'all',
      onCompleted: (data) => storage.set('token', data.login.token),
      onError: (error) => Alert.alert('Erro de Autenticação', error.message)
    });
  return { loginMutation, data, loading, error };
}
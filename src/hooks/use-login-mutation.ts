import { useMutation, gql } from "@apollo/client";
import { Alert } from "react-native";

const LOGIN_MUTATION = gql`
  mutation MakeLogin($auth: LoginInput!) {
    login(data: $auth) {
      token
    }
  }
`;

export function useLoginMutation() {
  const [loginMutation, { data, loading, error }] = useMutation(
    LOGIN_MUTATION,
    {
      errorPolicy: 'all',
      onError: (error) => Alert.alert('Erro de Autenticação', error.message) 
    });
  return { loginMutation, data, loading, error };
}

import { useMutation, gql } from "@apollo/client";
import { Alert } from "react-native";

const LOGIN_GQL = gql`
  mutation MakeLogin($authData: LoginInput!) {
    login(data: $authData) {
      token
    }
  }
`;

export const useLoginMutation: any = (email: string, password: string) => {
  const [loginMutation, { data, loading, error }] = useMutation(
    LOGIN_GQL,
    {
      variables: {authData: {email: email, password: password }},
      errorPolicy: 'all',
      onCompleted: () => Alert.alert('Welcome'),
      onError: (error) => Alert.alert('Erro durante autenticação', error.message)    
    });
  return [ loginMutation, { data, loading, error } ];
}

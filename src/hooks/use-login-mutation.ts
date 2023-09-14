import { useMutation, gql, ApolloError } from "@apollo/client";

const LOGIN_MUTATION = gql`
  mutation MakeLogin($auth: LoginInput!) {
    login(data: $auth) {
      token
    }
  }
`;

type LoginCallbacks = {
  onLoginCompleted: (data?: any) => void;
  onLoginError: (error?: ApolloError) => void;
} 
  
export function useLoginMutation({onLoginCompleted, onLoginError}: LoginCallbacks) {
  
  const [loginMutation, { data, loading, error }] = useMutation(
    LOGIN_MUTATION,
    {
      errorPolicy: 'all',
      onCompleted: onLoginCompleted,
      onError: onLoginError
    });

  function login(email: string, password: string) {
    loginMutation({
      variables: { auth: { email, password } },
    });   
  }

  return { login, data, loading, error };
}

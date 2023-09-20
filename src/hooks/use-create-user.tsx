import { useMutation, gql, ApolloError } from "@apollo/client";
import { useCallback } from "react";

interface UserInput { 
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  password: string;
  role: string;
}

interface UserCreatedResponse {
  createUser : UserCreatedInfo
}

type UserCreatedInfo = {
  name: string;
}

interface CreateUserCallbacks {
  onCreateCompleted: (data: UserCreatedResponse) => void;
  onCreateError: (error: ApolloError) => void;
}

const CREATE_USER = gql`
  mutation AddUser($userInput: UserInput!) {
    createUser(data: $userInput) {
      name
    }  
  }
`;

export function useCreateUser({onCreateCompleted, onCreateError}: CreateUserCallbacks) {
  const [createMutation, {data, loading, error}] = useMutation(
    CREATE_USER,
    {
      errorPolicy: 'all',
      onCompleted: onCreateCompleted,
      onError: onCreateError
    });
  
  const createUser = useCallback(
    ({name, email, phone, birthDate, password, role}: UserInput) => {
      createMutation({
        variables: {
          userInput: {
            name, email, phone, birthDate, password, role
          }
        }
      });
    }, []);

  return { createUser, data, loading, error };
}

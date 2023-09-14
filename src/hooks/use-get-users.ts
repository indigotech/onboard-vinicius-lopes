import { useQuery, gql } from "@apollo/client";
import { Alert } from "react-native";

const USERS_QUERY = gql`
  query UsersQuery{
    users {
		  nodes {
        name
        email
      }
    }
  }
`;

export function useGetUsers() {
  const { loading, error, data } = useQuery(
    USERS_QUERY,
    {
      errorPolicy: 'all',
      onError: (error) => Alert.alert('Erro de Busca', error.message)
    },
  );
  return { loading, error, data };
}

import { useQuery, gql } from "@apollo/client";
import { useCallback, useState } from "react";
import { Alert } from "react-native";

export interface User {
  id: string;
  name: string;
  email: string;
}

const FECTH_LIMIT = 20;

const USERS_QUERY = gql`
  query UsersQuery($pagination: PageInput) {
    users(data: $pagination) {
      nodes {
        id
        name
        email
      }
    }
  }
`;

export function useGetUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [offset, setOffset] = useState(0);
  const { loading } = useQuery(
    USERS_QUERY,
    {
      variables: {
        pagination: { offset: offset, limit: FECTH_LIMIT},
      },
      errorPolicy: 'all',
      onCompleted: (data) => setUsers(oldUsers => [ ...oldUsers, ...data.users.nodes]),
      onError: (error) => Alert.alert(error.message)
  });

  const loadMore = useCallback(() => {
    setOffset(offset + FECTH_LIMIT);
  }, [offset]);

  return { loading, users, loadMore };
}

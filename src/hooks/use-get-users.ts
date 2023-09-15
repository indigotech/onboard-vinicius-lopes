import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import { Alert } from "react-native";

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

const FECTH_LIMIT = 20;

export type User = {
  id: string;
  name: string;
  email: string;
}

export type Users = Array<User>;

export function useGetUsers() {
  const [users, setUsers] = useState<Users>([]);
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

  function loadMore() {
    setOffset(offset + FECTH_LIMIT);
  }

  return { loading, users, loadMore };
}

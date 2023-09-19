import { ApolloError, gql, useLazyQuery } from "@apollo/client";
import { useCallback } from "react";

type UserDetailsCallbacks = {
  onQueryCompleted: (data?: any) => void;
  onQueryError: (error?: ApolloError) => void;
}

const USER_DETAILS = gql`
  query UserDetails($id: ID) {
    user(id: $id) {
      name
      phone
      birthDate
      email
      role
    }
  }
`;

export function useGetUserDetails({ onQueryCompleted, onQueryError }: UserDetailsCallbacks) {
  const [queryUserDetails, { data, loading, error }] = useLazyQuery(
    USER_DETAILS,
    {
      errorPolicy: 'all',
      onCompleted: onQueryCompleted,
      onError: onQueryError
    }
  );
  
  const getUserDetails = useCallback((id: any) => {
    queryUserDetails({
      variables: { id }
    });    
  }, []);
  return { getUserDetails, data, loading, error };
}
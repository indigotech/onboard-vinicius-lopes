import { gql, useQuery } from "@apollo/client";

interface HookProps {
  id: string
}

export interface UserDetails {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  role: string;
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

export function useGetUserDetails({ id }: HookProps) {
  const { data, loading, error } = useQuery(
    USER_DETAILS,
    {
      variables: { id },
      errorPolicy: 'all'
    }
  );
  
  return { data, loading, error };
}

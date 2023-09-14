import { FlatList } from "react-native";
import { gql, useQuery } from '@apollo/client';
import { Item } from "./user-item";
import { User } from "./user-item";

const USERS = [
  { id: '0', name: 'Vinicius', email: 'vinicius@taqtile.com.br' },
  { id: '1', name: 'Fulano', email: 'fulano@taqtile.com.br' },
  { id: '3', name: 'Ciclano', email: 'ciclano@taqtile.com.br' }
];

const ALL_USERS = gql`
  query UsersQuery {
    users {
      nodes {
        name
        email
      }
    }
  }
`

type Users = {
  users: Array<User>;
}

export function UsersList(): JSX.Element {
  const { loading, error, data } = useQuery(ALL_USERS);
  
  return (
    <>
      <FlatList 
        data={USERS}
        renderItem={({item}) => <Item name={item.name} email={item.email} />}
        keyExtractor={({id}) => id}
      />
    </>
  );
}
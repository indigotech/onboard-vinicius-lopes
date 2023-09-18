import { FlatList } from "react-native";
import { Item } from "./user-item";
import { User } from "../hooks/use-get-users";

interface Props {
  users: User[];
  fetchMore: () => void;
}

export function UsersList({users, fetchMore}: Props): JSX.Element {

  return (
    <FlatList 
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Item name={item.name} email={item.email} />}
      onEndReachedThreshold={0.4}
      onEndReached={fetchMore}
    />
  );
}

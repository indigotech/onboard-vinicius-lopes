import { FlatList } from "react-native";
import { Item } from "./user-item";

type fetchFn = () => void;

export function UsersList({users, fetchMore}: {users: any, fetchMore: fetchFn}): JSX.Element {

  return (
    <FlatList 
      data={users}
      keyExtractor={(user) => user.id}
      renderItem={({item}) => <Item name={item.name} email={item.email} />}
      onEndReachedThreshold={0.4}
      onEndReached={fetchMore}
    />
  );
}

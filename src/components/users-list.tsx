import { FlatList } from "react-native";
import { Item } from "./user-item";
import { User } from "./user-item";

type Users = {
  users: Array<User>;
}

export function UsersList({users}: Users): JSX.Element {
  return (
    <FlatList 
      data={users}
      renderItem={({item}) => <Item name={item.name} email={item.email} />}
    />
  );
}

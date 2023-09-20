import { FlatList } from "react-native";
import { Item } from "./user-item";
import { User } from "../hooks/use-get-users";

interface UsersListProps {
  users: User[];
  goToUserPage: (id: string) => void;
  fetchMore: () => void;
}

export function UsersList({
  users,
  goToUserPage,
  fetchMore
}: UsersListProps ): JSX.Element {

  return (
    <FlatList 
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Item goToUserPage={goToUserPage} id={item.id} name={item.name} email={item.email} />}
      onEndReachedThreshold={0.4}
      onEndReached={fetchMore}
    />
  );
}

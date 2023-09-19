import  React  from "react";
import { SafeAreaView, ActivityIndicator } from "react-native";
import { UsersList } from "../components/users-list";
import { useGetUsers } from "../hooks/use-get-users";

interface Props{
  componentId: string;
}

export function HomeScreen({componentId}: Props): JSX.Element {
  const { loading, users, loadMore } = useGetUsers();

  return(
    <SafeAreaView>
      <UsersList navigationId={componentId} users={users} fetchMore={loadMore}/>
      { loading && <ActivityIndicator /> }
    </SafeAreaView>
  );
}

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'black'
    }
  }
}

import { SafeAreaView, ActivityIndicator } from "react-native";
import { UsersList } from "../components/users-list";
import { useGetUsers } from "../hooks/use-get-users";

export function HomeScreen(): JSX.Element {
  const { loading, data } = useGetUsers();
  
  if (loading) {
    return <ActivityIndicator size={'large'}/>
  }

  return(
    <SafeAreaView>
      <UsersList users={data.users.nodes}/>
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

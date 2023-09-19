import  React  from "react";
import { SafeAreaView, ActivityIndicator } from "react-native";
import { UsersList } from "../components/users-list";
import { useGetUsers } from "../hooks/use-get-users";
import { NavigationFAB } from "../components/navigation-fab";

interface Props {
  componentId: string;
}

export function HomeScreen({componentId}: Props): JSX.Element {
  const { loading, users, loadMore } = useGetUsers();

  return(
    <SafeAreaView>
      <UsersList users={users} fetchMore={loadMore}/>
      { loading && <ActivityIndicator /> }
      <NavigationFAB 
        title="Novo Usuário"
        srcId={componentId}
        destName="SIGNUP"
      />
    </SafeAreaView>
  );
}

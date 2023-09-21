import  React  from "react";
import { SafeAreaView, ActivityIndicator } from "react-native";
import { UsersList } from "../components/users-list";
import { useGetUsers } from "../hooks/use-get-users";
import { FAB } from "../components/fab";
import { Navigation } from "react-native-navigation";

interface HomeScreenProps {
  componentId: string;
}

export function HomeScreen({componentId}: HomeScreenProps): JSX.Element {
  const { loading, users, loadMore } = useGetUsers();

  function handlePress() {
    Navigation.push(componentId, {component: { name: 'SIGNUP' } });
  }
  
  function handleUserTap(id: string) {
    Navigation.push(componentId, {
      component: { 
        name: 'DETAILS',
        passProps: { id } 
      }
    });
  }

  return(
    <SafeAreaView>
      <UsersList
        users={users}
        fetchMore={loadMore}
        onUserTap={handleUserTap}
      />
      { loading && <ActivityIndicator /> }
      <FAB title="Novo Usuário" onPress={handlePress}
      />
    </SafeAreaView>
  );
}

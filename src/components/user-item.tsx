import { Text, Pressable, Alert } from 'react-native';
import { Navigation } from 'react-native-navigation';

interface Props {
  navigationId: string;
  id: string;
  name: string;
  email: string;
}

export function Item({navigationId, id, name, email}: Props): JSX.Element {

  function handlePress() {
    console.log('Buscando Dados de usuário', name, email);
    Navigation.push(
      navigationId,
      { 
        component: { 
          name: 'DETAILS', 
          passProps: { 
            name, 
            email
          }
        }
      });
    //getUserDetails(id);
  }

  return (
    <Pressable onPress={handlePress}>
      <Text>{name} - {email}</Text>
    </Pressable>
  );
}

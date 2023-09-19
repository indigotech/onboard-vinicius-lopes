import { Text, Pressable } from 'react-native';
import { Navigation } from 'react-native-navigation';

interface Props {
  navigationId: string;
  id: string;
  name: string;
  email: string;
}

export function Item({navigationId, id, name, email}: Props): JSX.Element {

  function handlePress() {
    Navigation.push(
      navigationId,
      { 
        component: { 
          name: 'DETAILS', 
          passProps: { 
            id
          }
        }
    });
  }

  return (
    <Pressable onPress={handlePress}>
      <Text>{name} - {email}</Text>
    </Pressable>
  );
}

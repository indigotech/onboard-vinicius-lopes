import { Text, Pressable } from 'react-native';

interface ItemProps {
  id: string;
  name: string;
  email: string;
  goToUserPage: (id: string) => void;
}

export function Item({ id, name, email, goToUserPage }: ItemProps): JSX.Element {

  return (
    <Pressable onPress={() => goToUserPage(id)}>
      <Text>{name} - {email}</Text>
    </Pressable>
  );
}

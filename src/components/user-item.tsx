import { View, Text } from 'react-native';

type Props = {
  name: string;
  email: string;
}

export function Item({name, email}: Props): JSX.Element{
  return (
    <View>
      <Text>{name} - {email}</Text>      
    </View>
  );
}

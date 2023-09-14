import { View, Text } from 'react-native';

export type User = {
  name: string;
  email: string;
}


export function Item(props: User): JSX.Element{
  return (
    <View>
      <Text>{props.name} - {props.email}</Text>      
    </View>
  );
}
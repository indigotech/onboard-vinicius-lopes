import { Text } from "react-native";

interface Props {
  name: string;
  email: string;
};

export function UserDetailScreen({name, email}: Props): JSX.Element {
  return(
    <>
      <Text>Detalhes do Usuário</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </>
  );
}
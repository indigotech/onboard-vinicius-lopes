import { ActivityIndicator, Text } from "react-native";
import { InfoField } from "../components/info-field";
import { useGetUserDetails } from "../hooks/use-get-user-details";

interface UserDetailScreenProps {
  id: string;
}

export function UserDetailScreen({id}: UserDetailScreenProps): JSX.Element {
  const { data, loading, error } = useGetUserDetails({ id });

  if (loading) {
    return <ActivityIndicator /> 
  }
  if (error) {
    return <Text>{error.message}</Text>
  }
  return(
    <>
      <Text>Detalhes do Usuário</Text>
      <InfoField label="nome" info={data.user.name} />
      <InfoField label="Email" info={data.user.email} />
      <InfoField label="Telefone" info={data.user.phone} />
      <InfoField label="Data de nascimento" info={data.user.birthDate} />
      <InfoField label="Função" info={data.user.role} />
    </>
  );
}

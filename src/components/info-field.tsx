import { Text } from "react-native";

interface Props {
  label: string;
  info: string;
}

export function InfoField({label, info}: Props): JSX.Element {
  return(
    <>
      <Text>{label}: {info}</Text>
    </>
  );
}

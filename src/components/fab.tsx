import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
}

export function FAB({title, onPress: navCallBack}: Props) {
  
  return (
    <Pressable style={styles.container} onPress={navCallBack}>
      <Text style={styles.label}>{title}</Text>
    </Pressable>
   );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "purple",
    padding: 10
  },
  label: {
    color: "white",
    fontSize: 18

  }
});

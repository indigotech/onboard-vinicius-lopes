import { Button } from "@react-native-material/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Navigation } from "react-native-navigation";

interface Props {
  title: string;
  srcId: string;
  destName: string;
}

export function NavigationFAB({title, srcId, destName}: Props) {
  
  const onPress = () => Navigation.push(srcId, { component: { name: destName } });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
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

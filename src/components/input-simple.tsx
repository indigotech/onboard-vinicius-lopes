import React from "react";
import { Text, TextInput, StyleSheet } from "react-native";

interface InputProps {
  inputHeader: string;
  onTextChange: (value: string) => void;
  value: string;
  secureTextEntry?: boolean;
}

export function InputSimple (props: InputProps): JSX.Element {
  return (
    <React.Fragment>
      <Text>
        {props.inputHeader}
      </Text>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onTextChange}
        secureTextEntry={props.secureTextEntry}
        autoCapitalize='none'
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
  },
});

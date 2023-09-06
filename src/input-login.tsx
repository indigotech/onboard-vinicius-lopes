import React from "react";
import { Text, TextInput, StyleSheet } from "react-native";

interface InputProps {
	inputHeader: string;
	handleTextChange: Function;
	value: string;
	secureTextEntry?: boolean;
}

function InputLogin (props: InputProps): JSX.Element {
  return (
    <React.Fragment>
			<Text>
				{props.inputHeader}
			</Text>
    	<TextInput
    	  style={styles.input}
    	  value={props.value}
				onChangeText={(value) => props.handleTextChange(value)}
				secureTextEntry={props.secureTextEntry}
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

export default InputLogin;
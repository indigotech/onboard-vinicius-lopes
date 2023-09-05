import { Text, TextInput } from "react-native";

interface InputProps {
	inputHeader: string;
	handleTextChange: Function;
}

function InputLogin (props: InputProps): JSX.Element {
  return (
    <>
			<Text>
				{props.inputHeader}
			</Text>
    	<TextInput
    	  style={{
    	    height: 40,
    	    borderColor: 'grey',
    	    borderWidth: 1
    	  }}
    	  placeholder='Digite sua senha'
				onChangeText={(value) => props.handleTextChange(value)}
    	/>
    </>
  );
}

export default InputLogin;
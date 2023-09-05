import { Text, TextInput } from "react-native";

function InputLogin (props: {inputHeader: string, }): JSX.Element {
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
    	/>
    </>
  );
}

export default InputLogin;
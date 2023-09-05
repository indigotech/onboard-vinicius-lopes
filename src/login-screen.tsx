import { useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import InputLogin from "./input-login";

function LoginScreen (props: {isDarkMode: boolean}): JSX.Element {
		const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');
		
		function handleEmailChange (email: string): void {
			setEmail(email);
		}

		function handlePasswordChange (password: string): void {
			setPassword(password);
		}

		return (
    	<View
        style={{
          backgroundColor: props.isDarkMode ? Colors.black : Colors.white
        }}>
        <Text>Bem-vindo(a) à Taqtile</Text>
        <InputLogin inputHeader='E-mail' handleTextChange={handleEmailChange}/>
        <InputLogin inputHeader='Senha' handleTextChange={handlePasswordChange}/>
				<Button
					onPress={() => Alert.alert(`Hello, ${email}. Your password is ${password}`)}
					title='Entrar'
					color='purple'
				/>
      </View>
    );
}

export default LoginScreen;
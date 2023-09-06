import { useState } from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";
import InputLogin from "./input-login";

function LoginScreen (): JSX.Element {
		const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');
		
		function handleEmailChange(email: string): void {
			setEmail(email);
		}

		function handlePasswordChange(password: string): void {
			setPassword(password);
		}

		function handleLoginButton(): void {
			setEmail('');
			setPassword('');
			Alert.alert(`Hello, ${email}. Your password is ${password}`);
		}

		return (
    	<View style={styles.mainView}>
        <Text style={styles.greeting}>Bem-vindo(a) à Taqtile!</Text>
        <InputLogin
					inputHeader='E-mail'
					value={email}
					handleTextChange={handleEmailChange}/>
        <InputLogin
					inputHeader='Senha'
					value={password}
					handleTextChange={handlePasswordChange}
					secureTextEntry={true}
				/>
				<Button
					onPress={handleLoginButton}
					title='Entrar'
					color='purple'
				/>
      </View>
    );
}

const styles = StyleSheet.create({
	mainView: {
		padding: 10,
	},
	greeting : {
		fontSize: 20,
		marginVertical: 10,
	},
});

export default LoginScreen;
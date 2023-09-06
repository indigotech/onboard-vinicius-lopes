import { useState } from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";
import { InputSimple } from "./input-simple";
import { validateEmail, validatePassword } from "../utils/input-validations";

export function LoginScreen (): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    function handleEmailChange(email: string): void {
      setEmail(email);
    }

    function handlePasswordChange(password: string): void {
      setPassword(password);
    }

    function showInvalidInputMessage(
      inputHeader: string,
      errorMessage: string | undefined 
    ): void {
      Alert.alert(`Erro no campo "${inputHeader}"`, `${errorMessage}`);
    }

    function handleLoginButton(): void {
      const emailValidation = validateEmail(email);
      const passwordValidation = validatePassword(password);
      
      if (emailValidation.isValidInput && passwordValidation.isValidInput) {
        Alert.alert(`Olá, ${email}`)
      }
      else if (!emailValidation.isValidInput) {
        showInvalidInputMessage(
          emailValidation.inputHeader,
          emailValidation.errorMessage
        );
      } else {
        showInvalidInputMessage(
          passwordValidation.inputHeader,
          passwordValidation.errorMessage
        );
      }
      setEmail('');
      setPassword('');
    }

    return (
      <View style={styles.mainView}>
        <Text style={styles.greeting}>Bem-vindo(a) à Taqtile!</Text>
        <InputSimple
          inputHeader='E-mail'
          value={email}
          onTextChange={handleEmailChange}/>
        <InputSimple
          inputHeader='Senha'
          value={password}
          onTextChange={handlePasswordChange}
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

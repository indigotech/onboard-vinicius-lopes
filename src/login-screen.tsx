import { useState } from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";
import { InputSimple } from "./input-simple";
import { 
  InputValidation,
  isEveryInputValid, 
  validateEmail, 
  validatePassword 
} from "../utils/input-validations";

export function LoginScreen (): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    function handleEmailChange(email: string): void {
      setEmail(email);
    }

    function handlePasswordChange(password: string): void {
      setPassword(password);
    }

    function handleLoginButton(): void {
      const emailValidation = validateEmail(email);
      const passwordValidation = validatePassword(password);
      const inputs = [emailValidation, passwordValidation];
      
      if (isEveryInputValid(inputs)) {
        Alert.alert(`Olá, ${email}`);
      } else {
        showFirstInvalidInput(inputs);
      }
      clearAllInputs();
    }

    function showFirstInvalidInput(inputs: Array<InputValidation>): void {
      const firstInvalid = inputs.find((input) => !input.isValidInput)
      Alert.alert(
        `Erro no campo "${firstInvalid?.inputHeader}"`, 
        `${firstInvalid?.errorMessage}`
      );
    }

    function clearAllInputs(): void {
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

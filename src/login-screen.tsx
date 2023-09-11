import { useState } from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";
import { InputSimple } from "./input-simple";
import { ValidationObject, validateEmail, validatePassword } from "../utils/input-validations";

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
      const inputs = [emailValidation, passwordValidation];
      
      if (isAllInputsValid(inputs)) {
        Alert.alert(`Olá, ${email}`);
      } else {
        handleFirstInvalidInput(inputs);
      }
      clearAllInputs();
    }

    function isAllInputsValid(inputs: Array<ValidationObject>): boolean {
      inputs.forEach((input) => {
        if (!input.isValidInput) {
          return false;
        }
      });
      return true;
    }

    function handleFirstInvalidInput(inputs: Array<ValidationObject>): void {
      inputs.forEach((input) => {
        if(!input.isValidInput) {
          showInvalidInputMessage(input.inputHeader, input.errorMessage);
          return;
        }
      });
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

import { useState } from "react";
import { 
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { InputSimple } from "./input-simple";
import { 
  InputValidation,
  isEveryInputValid, 
  validateEmail, 
  validatePassword 
} from "../utils/input-validations";
import { useLoginMutation } from "./hooks/use-login-mutation";
import { Navigation } from "react-native-navigation";
import { storage } from "../App";

interface Props {
  componentId: string;
}



export function LoginScreen({componentId}: Props): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading } = useLoginMutation({
      onLoginCompleted: (data) => {
        saveToken(data.login.token);
        goToHome();
      },
      onLoginError: (error) => Alert.alert('Erro de Autenticação', error?.message)
    });

    function saveToken(token: string) {
      storage.set('token', token);
    }

    function goToHome() {
      Navigation.push(componentId, { component: { name: 'HOME' } });
    }

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
        login(email, password);
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
          disabled={loading}
          title='Entrar'
          color='purple'
        />
        {loading && <ActivityIndicator size='large' />}
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

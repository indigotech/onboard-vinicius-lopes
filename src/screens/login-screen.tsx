import { useState } from "react";
import { 
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView
} from "react-native";
import { StyledInput } from "../components/input-simple.styles";
import { 
  InputValidation,
  isEveryInputValid, 
  validateEmail, 
  validatePassword 
} from "../../utils/input-validations";
import { useLoginMutation } from "../hooks/use-login-mutation";
import { Navigation } from "react-native-navigation";
import { storage } from "../../utils/storage";
import { MainButton } from "../components/main-button";
import { StyledHeader } from "../components/header";
import { InputSimple } from "../components/input-simple";

interface LoginScreenProps {
  componentId: string;
}

interface Input extends InputValidation {
  value: string;
}

const DefaultInput: Input = {
  value: '',
  inputHeader: '',
  isValidInput: false
}

export function LoginScreen({componentId}: Props): JSX.Element {
    const [email, setEmail] = useState<Input>(DefaultInput);
    const [password, setPassword] = useState<Input>(DefaultInput);
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
      const emailValidation = validateEmail(email);
      setEmail({ ...emailValidation, value: email });
    }
    
    function handlePasswordChange(password: string): void {
      const passwordValidation = validatePassword(password);
      setPassword({ ...passwordValidation, value: password });
    }

    function handleLoginButton(): void {
      const inputs = [email, password];
      
      if (isEveryInputValid(inputs)) {
        login(email.value, password.value);
        clearAllInputs();
      } 
    }

    function clearAllInputs(): void {
      setEmail(DefaultInput);
      setPassword(DefaultInput);
    }

    return (
      <SafeAreaView>
        <View style={styles.mainView}>
          <StyledHeader $bold="bold">Bem-vindo(a) à Taqtile!</StyledHeader>
          <InputSimple
            label='E-mail'
            value={email?.value}
            onTextChange={handleEmailChange}
            errorMessage={email.errorMessage}
          />
          <InputSimple
            label='Senha'
            value={password?.value}
            onTextChange={handlePasswordChange}
            secureTextEntry={true}
            errorMessage={password.errorMessage}
          />
          <MainButton primary label="Entrar" onPress={handleLoginButton}/>
          {loading && <ActivityIndicator size='large' />}
        </View>
      </SafeAreaView>
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

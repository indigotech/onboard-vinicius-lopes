import { useState } from "react";
import {
  Alert,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView
} from "react-native";
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
import { MainContainer } from "../components/main-container";

interface LoginScreenProps {
  componentId: string;
}

interface Input extends InputValidation {
  value: string;
}

const DefaultInput: Input = {
  value: '',
  isValidInput: false
}

export function LoginScreen({componentId}: LoginScreenProps): JSX.Element {
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
      console.log('Trying login');
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
        <MainContainer>
          <StyledHeader bold="bold">Bem-vindo(a) à Taqtile!</StyledHeader>
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
          <MainButton 
            primary
            label="Entrar"
            onPress={handleLoginButton}
            disabled={loading}
          />
          {loading && <ActivityIndicator size='large' />}
        </MainContainer>
      </SafeAreaView>
    );
}

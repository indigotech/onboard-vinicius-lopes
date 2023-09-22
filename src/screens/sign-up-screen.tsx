import { useState } from "react";
import { InputSimple } from "../components/input-simple";
import { ActivityIndicator, Alert, Button, SafeAreaView } from "react-native";
import {
  InputValidation,
  isEveryInputValid,
  validateBirth,
  validateEmail,
  validateName,
  validatePassword,
  validatePhone,
  validateRole
} from "../../utils/input-validations";
import { useCreateUser } from "../hooks/use-create-user";
import { Navigation } from "react-native-navigation";
import { MainButton } from "../components/main-button";
import { MainContainer } from "../components/main-container";

interface SignUpScreenProps {
  componentId: string;
}

interface Input extends InputValidation {
  value: string;
}

const DefaultInput: Input = {
  value: '',
  isValidInput: false
}

export function SignUpScreen({componentId}: SignUpScreenProps): JSX.Element {
  const [name, setName] = useState<Input>(DefaultInput);
  const [email, setEmail] = useState<Input>(DefaultInput);
  const [phone, setPhone] = useState<Input>(DefaultInput);
  const [birth, setBirth] = useState<Input>(DefaultInput);
  const [password, setPassword] = useState<Input>(DefaultInput);
  const [role, setRole] = useState<Input>(DefaultInput);
  
  const {createUser, loading} = useCreateUser({
    onCreateCompleted: () => {
      Alert.alert('Usuário criado com sucesso');
      Navigation.pop(componentId);
    },
    onCreateError: (error) => Alert.alert('Erro na  criação', error?.message)
  });

  function handleNameChange(name: string): void {
    const nameValidation = validateName(name);
    setPassword({ ...nameValidation, value: name });
  }

  function handleEmailChange(email: string): void {
    const emailValidation = validateEmail(email);
    setPassword({ ...emailValidation, value: email });
  }
  
  function handlePhoneChange(phone: string) {
    const phoneChars = /\d$/;
    if (isInputAllowed(phoneChars, phone)) {
      const phoneValidation = validatePhone(phone);
      setPhone({ ...phoneValidation, value: phone });
    }
  }
  
  function handleBirthChange(birth: string) {
    const dateChars = /\d$|\/$/;
    if (isInputAllowed(dateChars, birth)) {
      const birthValidation = validateBirth(birth);
      setBirth({ ...birthValidation, value: birth });
    }
  }

  function handlePasswordChange(password: string): void {
    const passwordValidation = validatePassword(password);
    setPassword({ ...passwordValidation, value: password });
  }

  function handleRoleChange(role: string): void {
    const roleValidation = validatePassword(role);
    setPassword({ ...roleValidation, value: role });
  }

  function handleAddUser() {
    const inputs = [name, email, phone, birth, password, role];
    if (isEveryInputValid(inputs)) {
      const birthDate = convertDateFromBrazillianToAmerican(birth.value);
      createUser({
        name: name.value, 
        email: email.value, 
        phone: phone.value, 
        birthDate: birthDate, 
        password: password.value, 
        role: role.value
      });
    }
  }
  
  return (
    <SafeAreaView>
      <MainContainer>
        <InputSimple 
          label="Nome"
          value={name.value}
          onTextChange={handleNameChange}
          />
        <InputSimple 
          label="E-mail"
          value={birth.value}
          onTextChange={handleEmailChange}
          />
        <InputSimple 
          label="Telefone (ex: 1144448888)"
          value={phone.value}
          onTextChange={handlePhoneChange}
          />
        <InputSimple 
          label="Data de Nascimento (ex: 01/01/2021)"
          value={birth.value}
          onTextChange={handleBirthChange}
          />
        <InputSimple 
          label="Senha"
          value={password.value}
          onTextChange={handlePasswordChange}
          />
        <InputSimple 
          label="Função"
          value={role.value}
          onTextChange={handleRoleChange}
          />
        <MainButton
          primary 
          label="Adicionar Usuário"
          onPress={handleAddUser}
          disabled={loading}
          />
        {loading && <ActivityIndicator />}
      </MainContainer>
    </SafeAreaView>
  );
}

function convertDateFromBrazillianToAmerican(date: string): string {
  const datePattern = /^(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{4})$/;
  const dateMatch = date.match(datePattern)?.groups
  const formattedDate = dateMatch?.month + "-" + dateMatch?.day + "-" + dateMatch?.year;
  return formattedDate;
}

function isInputAllowed(allowedRegex: RegExp, input: string) {
  return (input.match(allowedRegex) || input.length === 0) ? true : false;
}

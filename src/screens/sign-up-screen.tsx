import { useState } from "react";
import { InputSimple } from "../components/input-simple";
import { ActivityIndicator, Alert, Button } from "react-native";
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

interface Props {
  componentId: string;
}

export function SignUpScreen({componentId}: Props): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const {createUser, loading} = useCreateUser({
    onCreateCompleted: () => {
      Alert.alert('Usuário criado com sucesso');
      Navigation.pop(componentId);
    },
    onCreateError: (error) => Alert.alert('Erro na  criação', error?.message)
  });

  function handleBirth(birth: string) {
    const dateChars = /\d$|\/$/;
    // remove characters that aren't digits or slashes
    if (birth.match(dateChars) || birth.length === 0) {
      setBirth(birth);
    }
  }

  function handlePhone(phone: string) {
    const phoneChars = /\d$/;
    if (phone.match(phoneChars) || phone.length === 0) {
      setPhone(phone);
    }
  }

  function handleAddUser() {
    const inputsValidaton = [
      validateName(name),
      validateEmail(email),
      validatePhone(phone),
      validateBirth(birth),
      validatePassword(password),
      validateRole(role)
    ];
    if (isEveryInputValid(inputsValidaton)) {
      const birthDate = formatDateInput(birth);
      createUser({name, email, phone, birthDate, password, role});
    } else {
      showFirstInvalidInput(inputsValidaton);
    }
  }

  function showFirstInvalidInput(inputs: Array<InputValidation>): void {
    const firstInvalid = inputs.find((input) => !input.isValidInput)
    Alert.alert(
      `Erro no campo "${firstInvalid?.inputHeader}"`, 
      `${firstInvalid?.errorMessage}`
    );
  }
  
  return (
    <>
      <InputSimple 
        inputHeader="Nome"
        value={name}
        onTextChange={setName}
      />
      <InputSimple 
        inputHeader="E-mail"
        value={email}
        onTextChange={setEmail}
      />
      <InputSimple 
        inputHeader="Telefone (ex: 1144448888)"
        value={phone}
        onTextChange={handlePhone}
      />
      <InputSimple 
        inputHeader="Data de Nascimento (ex: 01/01/2021)"
        value={birth}
        onTextChange={handleBirth}
      />
      <InputSimple 
        inputHeader="Senha"
        value={password}
        onTextChange={setPassword}
      />
      <InputSimple 
        inputHeader="Função"
        value={role}
        onTextChange={setRole}
      />
      <Button title="Adicionar Usuário" onPress={handleAddUser} disabled={loading} />
      {loading && <ActivityIndicator />}
    </>
  );
}

// Converts from brazilian standard to Date standard
function formatDateInput(date: string): string {
  const datePattern = /^(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{4})$/;
  const dateMatch = date.match(datePattern)?.groups
  const formattedDate = dateMatch?.year + "-" + dateMatch?.month + "-" + dateMatch?.day;
  return formattedDate;
}

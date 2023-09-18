import { useState } from "react";
import { InputSimple } from "../components/input-simple";
import { Alert, Button } from "react-native";
import {
  InputValidation,
  isEveryInputValid,
  validateBirth,
  validateEmail,
  validateID,
  validateName,
  validatePhone,
  validateRole
} from "../../utils/input-validations";


export function SignUpScreen(): JSX.Element {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  function handleBirth(birth: string) {
    const dateChars = /\d$|\/$/;
    // remove characters that aren't digits or slashes
    if (birth.match(dateChars) || birth.length === 0) {
      setBirth(birth);
    }
  }

  function handlePhone(phone: string) {
    const phoneChars = /\d$|\)$|\($/;
    if (phone.match(phoneChars) || phone.length === 0) {
      setPhone(phone);
    }
  }

  function handleAddUser() {
    const inputsValidaton = [
      validateID(email),
      validateName(name),
      validatePhone(phone),
      validateBirth(birth),
      validateEmail(email),
      validateRole(role)
    ];
    if (isEveryInputValid(inputsValidaton)) {
      Alert.alert("Sucesso", name);
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
        inputHeader="ID"
        value={id}
        onTextChange={setId}
      />
      <InputSimple 
        inputHeader="Nome"
        value={name}
        onTextChange={setName}
      />
      <InputSimple 
        inputHeader="Telefone (ex: (11)1234-5678)"
        value={phone}
        onTextChange={handlePhone}
      />
      <InputSimple 
        inputHeader="Data de Nascimento (ex: 01/01/2021)"
        value={birth}
        onTextChange={handleBirth}
      />
      <InputSimple 
        inputHeader="E-mail"
        value={email}
        onTextChange={setEmail}
      />
      <InputSimple 
        inputHeader="Função"
        value={role}
        onTextChange={setRole}
      />
      <Button title="Adicionar Usuário" onPress={handleAddUser}/>
    </>
  );
}
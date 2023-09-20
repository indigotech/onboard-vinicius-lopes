export interface InputValidation {
  inputHeader: string;
  isValidInput: boolean;
  errorMessage?: string;
}

export const ErrorMessages = {
  EMPTY_INPUT: 'O campo deve ser preenchido',
  SHORT_INPUT: 'A senha deve conter, no mínimo, 7 caracteres',
  INVALID_EMAIL: 'O e-mail não atende ao padrão ###@###.com',
  INVALID_PASSWORD: 'A senha deve conter, no mínimo, uma letra e um dígito',
  INVALID_BIRTH: 'Data de nascimento inválida',
  INVALID_PHONE: "O telefone digitado não é válido",
  INVALID_ROLE: "A função digitada não é válida. Apenas admin e user são aceitos."
}

function isInputEmpty(input: string): boolean {
  return input.length === 0 ? true : false;
}

function isInputTooShort(input: string): boolean {
  const minimumPasswordSize = 7;
  return input.length < minimumPasswordSize ? true : false;
}

function isEmailPatternInvalid(email: string): boolean {
  const emailValidPattern: RegExp = /^\w{3,}\@\w{3,}\.com(\.br)?$/;
  return email.match(emailValidPattern) ? false : true;
}

function isPasswordPatternInvalid(password: string): boolean {
  return hasDigit(password) && hasLetter(password) ? false : true;
}

function hasDigit(field: string): boolean {
  const digit = /\d/;
  return field.match(digit) ? true : false;
}

function hasLetter(field: string): boolean {
  const letters = /[a-zA-Z]/;
  return field.match(letters) ? true : false;
}

function isPhoneInvalid(phone: string): boolean {
  const phonePattern = /^\d\d9?\d{4}\d{4}$/;
  return phone.match(phonePattern) ? false : true;
}

function isDateInvalid(birthDate: string): boolean {
  const datePattern = /^(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{4})$/;
  const date = birthDate.match(datePattern);
  const formatedDate = date?.groups?.year + "-" + date?.groups?.month + "-" + date?.groups?.day;
  if (isDateFormatInvalid(formatedDate)) {
    return true;
  }
  if(isBirthDateOutOfRange(formatedDate)) {
    return true;
  }
  return false;
}

function isDateFormatInvalid(date: string): boolean {
  const completeDate = Date.parse(date);
  return isNaN(completeDate);
}

function isBirthDateOutOfRange(formatedBirth: string): boolean {
  const limitDate = new Date(1923, 12, 31);
  const birthDate = new Date(formatedBirth);
  const today = new Date();

  if (birthDate < limitDate || birthDate > today) {
    return true;
  }
  return false;
}

function isRoleInvalid(role: string) {
  const validRoles = ['admin', 'user'];
  return validRoles.includes(role) ? false : true; 
}

export function validateEmail(email: string): InputValidation {
  const inputHeader = 'E-mail';
  const emailValidation: InputValidation = { inputHeader, isValidInput: true };
  
  if (isInputEmpty(email)) {
    emailValidation.isValidInput = false;
    emailValidation.errorMessage = ErrorMessages.EMPTY_INPUT;
    return emailValidation;
  }
  if (isEmailPatternInvalid(email)) {
    emailValidation.isValidInput = false;
    emailValidation.errorMessage = ErrorMessages.INVALID_EMAIL;
    return emailValidation;
  }
  return emailValidation;
}

export function validatePassword(password: string): InputValidation {
  const inputHeader = 'Senha';
  const passwordValidation: InputValidation = { inputHeader, isValidInput: true };

  if (isInputEmpty(password)) {
    passwordValidation.isValidInput = false;
    passwordValidation.errorMessage = ErrorMessages.EMPTY_INPUT;  
    return passwordValidation;
  }
  if (isInputTooShort(password)) {
    passwordValidation.isValidInput = false;
    passwordValidation.errorMessage = ErrorMessages.SHORT_INPUT;
    return passwordValidation;
  }
  if (isPasswordPatternInvalid(password)) {
    passwordValidation.isValidInput = false;
    passwordValidation.errorMessage = ErrorMessages.INVALID_PASSWORD;
    return passwordValidation;
  }
  return passwordValidation;
}

export function validatePhone(phone: string): InputValidation{
  const inputHeader = 'Telefone';
  const phoneValidation: InputValidation = { inputHeader, isValidInput: true };

  if (isInputEmpty(phone)) {
    phoneValidation.isValidInput = false;
    phoneValidation.errorMessage = ErrorMessages.EMPTY_INPUT;
    return phoneValidation;
  }
  if (isPhoneInvalid(phone)) {
    phoneValidation.isValidInput = false;
    phoneValidation.errorMessage = ErrorMessages.INVALID_PHONE;
    return phoneValidation;
  }
  return phoneValidation;
}

export function validateName(name: string): InputValidation{
  const inputHeader = 'Nome';
  const nameValidation: InputValidation = { inputHeader, isValidInput: true };

  if (isInputEmpty(name)) {
    nameValidation.isValidInput = false;
    nameValidation.errorMessage = ErrorMessages.EMPTY_INPUT;
    return nameValidation;
  }
  return nameValidation;
}

export function validateBirth(birth: string): InputValidation{
  const inputHeader = 'Data de Nascimento';
  const birthValidation: InputValidation = { inputHeader, isValidInput: true };

  if (isInputEmpty(birth)) {
    birthValidation.isValidInput = false;
    birthValidation.errorMessage = ErrorMessages.EMPTY_INPUT;
    return birthValidation;
  }
  if (isDateInvalid(birth)) {
    birthValidation.isValidInput = false;
    birthValidation.errorMessage = ErrorMessages.INVALID_BIRTH;
    return birthValidation;
  }
  return birthValidation;
}

export function validateRole(role: string): InputValidation {
  const inputHeader = 'Função';
  const roleValidation: InputValidation = { inputHeader, isValidInput: true };

  if (isInputEmpty(role)) {
    roleValidation.isValidInput = false;
    roleValidation.errorMessage = ErrorMessages.EMPTY_INPUT;
    return roleValidation;
  }
  if (isRoleInvalid(role)) {
    roleValidation.isValidInput = false;
    roleValidation.errorMessage = ErrorMessages.INVALID_ROLE;
    return roleValidation;
  }
  return roleValidation;
}

export function isEveryInputValid(inputs: Array<InputValidation>): boolean {
  return inputs.every((input) => input.isValidInput);
}

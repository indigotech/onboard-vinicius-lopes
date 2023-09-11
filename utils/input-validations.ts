const EMPTY_STRING_SIZE = 0; 
const MINIMUM_PASSWORD_SIZE = 7;

export const ErrorMessages = {
  EMPTY_INPUT: 'O campo deve ser preenchido',
  SHORT_INPUT: 'A senha deve conter, no mínimo, 7 caracteres',
  INVALID_EMAIL: 'O e-mail não atende ao padrão ###@###.com',
  INVALID_PASSWORD: 'A senha deve conter, no mínimo, uma letra e um dígito',
}
export interface ValidationObject {
  inputHeader: string;
  isValidInput: boolean;
  errorMessage?: string;
}

function isInputEmpty(input: string): boolean {
  return input.length === EMPTY_STRING_SIZE ? true : false;
}

function isInputTooShort(input: string, minimumPasswordSize: number): boolean {
  return input.length < minimumPasswordSize ? true : false;
}

function isEmailPatternInvalid(email: string): boolean {
  const emailValidPattern: RegExp = /\w{3,}\@\w{3,}\.com/;
  return email.match(emailValidPattern) ? false : true;
}

function isPasswordPatternInvalid(password: string): boolean {
  const hasLetter = /[a-zA-Z]/;
  const hasDigit = /\d/;
  return password.match(hasLetter) && password.match(hasDigit) ? false : true;
}

function setInvalidObject(
  inputHeader: string,
  invalidMessage: string
): ValidationObject {
  return {
    inputHeader: inputHeader,
    isValidInput: false,
    errorMessage: invalidMessage
  }
}

export function validateEmail(email: string): ValidationObject {
  const emailValidation: ValidationObject = {
    inputHeader: 'E-mail',
    isValidInput: true,
  };
  const inputHeader = emailValidation.inputHeader;
  
  if (isInputEmpty(email)) {
    return setInvalidObject(inputHeader, ErrorMessages.EMPTY_INPUT);
  }
  if (isEmailPatternInvalid(email)) {
    return setInvalidObject(inputHeader, ErrorMessages.INVALID_EMAIL);
  }
  return emailValidation;
}

export function validatePassword(password: string): ValidationObject {
  const passwordValidation: ValidationObject = {
    inputHeader: 'Senha',
    isValidInput: true,
  };
  const inputHeader = passwordValidation.inputHeader;

  if (isInputEmpty(password)) {
    return setInvalidObject(inputHeader, ErrorMessages.EMPTY_INPUT);
  }
  if (isInputTooShort(password, MINIMUM_PASSWORD_SIZE)) {
    return setInvalidObject(inputHeader, ErrorMessages.SHORT_INPUT);
  }
  if (isPasswordPatternInvalid(password)) {
    return setInvalidObject(inputHeader, ErrorMessages.INVALID_PASSWORD);
  }
  return passwordValidation;
}


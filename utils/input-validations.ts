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

function isInputTooShort(input: string, MINIMUM_PASSWORD_SIZE: number): boolean {
  return input.length < MINIMUM_PASSWORD_SIZE ? true : false;
}

function isEmailPatternInvalid(email: string): boolean {
  const emailValidPattern: RegExp = /\w{3,}\@\w{3,}\.com/;
  return email.match(emailValidPattern) ? false : true;
}

function isPasswordPatternInvalid(password: string): boolean {
  return password.match(/[a-zA-Z]/) && password.match(/\d/) ? false : true;
}

export function validateEmail(email: string): ValidationObject {
  const emailValidation: ValidationObject = {
    inputHeader: 'E-mail',
    isValidInput: true,
  };

  if (isInputEmpty(email)) {
    emailValidation.isValidInput = false;
    emailValidation.errorMessage = ErrorMessages.EMPTY_INPUT
  } else if (isEmailPatternInvalid(email)) {
    emailValidation.isValidInput = false;
    emailValidation.errorMessage = ErrorMessages.INVALID_EMAIL;
  }
  return emailValidation;
}

export function validatePassword(password: string): ValidationObject {
  const passwordValidation: ValidationObject = {
    inputHeader: 'Senha',
    isValidInput: true,
  };

  if (isInputEmpty(password)) {
    passwordValidation.isValidInput = false;
    passwordValidation.errorMessage = ErrorMessages.EMPTY_INPUT;
  } else if (isInputTooShort(password, MINIMUM_PASSWORD_SIZE)) {
    passwordValidation.isValidInput = false
    passwordValidation.errorMessage = ErrorMessages.SHORT_INPUT;
  } else if (isPasswordPatternInvalid(password)) {
    passwordValidation.isValidInput = false;
    passwordValidation.errorMessage = ErrorMessages.INVALID_PASSWORD;
  }
  return passwordValidation;
}


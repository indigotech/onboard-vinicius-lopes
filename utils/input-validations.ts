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
  const hasLetter = /[a-zA-Z]/;
  const hasDigit = /\d/;
  return password.match(hasLetter) && password.match(hasDigit) ? false : true;
}

function setInvalidObject(
  validationObj: ValidationObject,
  invalidMessage: string
): void {
  validationObj.isValidInput = false;
  validationObj.errorMessage = invalidMessage;
}

export function validateEmail(email: string): ValidationObject {
  const emailValidation: ValidationObject = {
    inputHeader: 'E-mail',
    isValidInput: true,
  };

  if (isInputEmpty(email)) {
    setInvalidObject(emailValidation, ErrorMessages.EMPTY_INPUT);
  } else if (isEmailPatternInvalid(email)) {
    setInvalidObject(emailValidation, ErrorMessages.INVALID_EMAIL);
  }
  return emailValidation;
}

export function validatePassword(password: string): ValidationObject {
  const passwordValidation: ValidationObject = {
    inputHeader: 'Senha',
    isValidInput: true,
  };

  if (isInputEmpty(password)) {
    setInvalidObject(passwordValidation, ErrorMessages.EMPTY_INPUT);
  } else if (isInputTooShort(password, MINIMUM_PASSWORD_SIZE)) {
    setInvalidObject(passwordValidation, ErrorMessages.SHORT_INPUT);
  } else if (isPasswordPatternInvalid(password)) {
    setInvalidObject(passwordValidation, ErrorMessages.INVALID_PASSWORD);
  }
  return passwordValidation;
}


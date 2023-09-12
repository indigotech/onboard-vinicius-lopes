const EMPTY_STRING_SIZE = 0; 
const MINIMUM_PASSWORD_SIZE = 7;

export const ErrorMessages = {
  EMPTY_INPUT: 'O campo deve ser preenchido',
  SHORT_INPUT: 'A senha deve conter, no mínimo, 7 caracteres',
  INVALID_EMAIL: 'O e-mail não atende ao padrão ###@###.com',
  INVALID_PASSWORD: 'A senha deve conter, no mínimo, uma letra e um dígito',
}
export interface InputValidation {
  inputHeader: string;
  isValidInput: boolean;
  errorMessage?: string;
}

function isInputEmpty(input: string): boolean {
  return input.length === 0 ? true : false;
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
  if (isInputTooShort(password, MINIMUM_PASSWORD_SIZE)) {
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

export function isEveryInputValid(inputs: Array<InputValidation>): boolean {
  return inputs.every((input) => input.isValidInput);
}

const EMPTY_STRING_SIZE = 0; 
const MINIMUM_PASSWORD_SIZE = 7;

const EMPTY_INPUT_MESSAGE = `O campo deve ser preenchido`;
export interface ValidationObject {
  isValidInput: boolean;
  errorMessage?: string;
}

function isInputEmpty(input: string): boolean {
  return input.length === 0 ? true : false;
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
  if (isInputEmpty(email)) {
    return {
      isValidInput: false,
      errorMessage: EMPTY_INPUT_MESSAGE,
    };
  } else if (isEmailPatternInvalid(email)) {
    return {
      isValidInput: false,
      errorMessage: 'O e-mail não atende ao padrão ###@###.com'
    };
  }
  return {
    isValidInput: true,
  };
}

export function validatePassword(password: string): ValidationObject {
  if (isInputEmpty(password)) {
    return {
      isValidInput: false,
      errorMessage: EMPTY_INPUT_MESSAGE,
    };
  } else if (isInputTooShort(password, MINIMUM_PASSWORD_SIZE)) {
    return {
      isValidInput: false,
      errorMessage: 'A senha é deve conter, no mínimo, 7 caracteres',
    };
  } else if (isPasswordPatternInvalid(password)) {
    return {
      isValidInput: false,
      errorMessage: 'A senha deve conter, no mínimo, uma letra e um dígito',
    }
  }

  return {
    isValidInput: true,
  }
}


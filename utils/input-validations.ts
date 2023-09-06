const EMPTY_STRING_SIZE = 0; 
const EMPTY_INPUT_MESSAGE = `O campo deve ser preenchido`;

export interface ValidationObject {
  errorMessage?: string;
  isValidInput: boolean;
}

function isInputEmpty(input: string): boolean {
  return input.length === 0 ? true : false;
}

function isEmailPatternInvalid(email: string): boolean {
  const emailValidPattern: RegExp = /\w{3,}\@\w{3,}\.com/;
  return email.match(emailValidPattern) ? false : true;
}

export function validateEmail(email: string): ValidationObject{
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

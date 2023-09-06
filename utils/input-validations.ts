const EMPTY_STRING_SIZE = 0; 
const EMPTY_INPUT_MESSAGE = `O campo deve ser preenchido`;

interface ValidationObject {
  errorMessage?: string;
  isValidInput: boolean;
}

function isInputEmpty(input: string): boolean {
  return input.length === 0 ? true : false;
} 

function validateEmail(email: string): ValidationObject{
  if (isInputEmpty(email)) {
    return {
      isValidInput: false,
      errorMessage: EMPTY_INPUT_MESSAGE,
    };
  } else if (email.match(``)) {
    return {
      isValidInput: false,
    };  
  }
  return {
    isValidInput: true,
  };
}

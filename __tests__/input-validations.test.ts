import { test, expect } from '@jest/globals';
import { validateEmail } from '../utils/input-validations';
import { ValidationObject } from '../utils/input-validations';

test('Has empty email invalidation', () => {
    const emptyEmail: string = '';
    let emailValidation: ValidationObject = validateEmail(emptyEmail);
    expect(emailValidation["isValidInput"]).toBe(false);
});

test('Has invalid email message', () => {
    const emptyEmail: string = 'e@usp.com';
    let emailValidation: ValidationObject = validateEmail(emptyEmail);
    expect(emailValidation["errorMessage"]).toBeDefined();
});

test('Has a valid email', () => {
    const emptyEmail: string = 'taq@tiler.com';
    let emailValidation: ValidationObject = validateEmail(emptyEmail);
    expect(emailValidation["isValidInput"]).toBe(true);
});
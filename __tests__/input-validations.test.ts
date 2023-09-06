import { test, expect } from '@jest/globals';
import { validateEmail, validatePassword } from '../utils/input-validations';
import { ValidationObject } from '../utils/input-validations';

test('Has an empty email invalidation', () => {
    const emptyEmail: string = '';
    let emailValidation: ValidationObject = validateEmail(emptyEmail);
    expect(emailValidation["isValidInput"]).toBe(false);
});

test('Has an invalid email message', () => {
    const invalidEmail: string = 'e@usp.com';
    let emailValidation: ValidationObject = validateEmail(invalidEmail);
    expect(emailValidation["errorMessage"]).toBeDefined();
});

test('Has a valid email', () => {
    const validEmail: string = 'taq@tiler.com';
    let emailValidation: ValidationObject = validateEmail(validEmail);
    expect(emailValidation["isValidInput"]).toBe(true);
});

test('Has an empty password invalidation', () => {
    const emptyPassword: string = '';
    let passwordValidation: ValidationObject = validatePassword(emptyPassword);
    expect(passwordValidation["isValidInput"]).toBe(false);
});

test('Has a too short password invalidation', () => {
    const shortPassword: string = 'abc123';
    let passwordValidation: ValidationObject = validatePassword(shortPassword);
    expect(passwordValidation["isValidInput"]).toBe(false);
});

test('Has a password without digits)', () => {
    const invalidPassword: string = 'abcdefgh';
    let passwordValidation: ValidationObject = validatePassword(invalidPassword);
    expect(passwordValidation["errorMessage"]).toBeDefined();
});

test('Has a password without letters', () => {
    const invalidPassword: string = '1234567@';
    let passwordValidation: ValidationObject = validatePassword(invalidPassword);
    expect(passwordValidation["errorMessage"]).toBeDefined();
});

test('Has a valid password', () => {
    const validPassword: string = 'abcd1234';
    let passwordValidation: ValidationObject = validatePassword(validPassword);
    expect(passwordValidation["isValidInput"]).toBe(true);
});
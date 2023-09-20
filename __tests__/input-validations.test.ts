import { test, expect } from '@jest/globals';
import { validateBirth, validateEmail, validatePassword, validatePhone, validateRole } from '../utils/input-validations';
import { InputValidation } from '../utils/input-validations';
import { ErrorMessages } from '../utils/input-validations';

test('Has an empty email invalidation', () => {
    const emptyEmail: string = '';
    let emailValidation: InputValidation = validateEmail(emptyEmail);
    expect(emailValidation.isValidInput).toBe(false);
    expect(emailValidation.errorMessage).toBe(ErrorMessages.EMPTY_INPUT);
});

test('Has an invalid email pattern', () => {
    const invalidEmail: string = 'e@usp.com';
    let emailValidation: InputValidation = validateEmail(invalidEmail);
    expect(emailValidation.isValidInput).toBe(false);
    expect(emailValidation.errorMessage).toBe(ErrorMessages.INVALID_EMAIL);
});

test('Has a valid email', () => {
    const validEmail: string = 'taq@tiler.com';
    let emailValidation: InputValidation = validateEmail(validEmail);
    expect(emailValidation.isValidInput).toBe(true);
    expect(emailValidation.errorMessage).toBeUndefined();
});

test('Has an empty password invalidation', () => {
    const emptyPassword: string = '';
    console.log(emptyPassword.length);
    let passwordValidation: InputValidation = validatePassword(emptyPassword);
    expect(passwordValidation.isValidInput).toBe(false);
    expect(passwordValidation.errorMessage).toBe(ErrorMessages.EMPTY_INPUT);
});

test('Has a too short password invalidation', () => {
    const shortPassword: string = 'abc123';
    let passwordValidation: InputValidation = validatePassword(shortPassword);
    expect(passwordValidation.isValidInput).toBe(false);
    expect(passwordValidation.errorMessage).toBe(ErrorMessages.SHORT_INPUT);
});

test('Has a password without digits)', () => {
    const invalidPassword: string = 'abcdefgh';
    let passwordValidation: InputValidation = validatePassword(invalidPassword);
    expect(passwordValidation.isValidInput).toBe(false);
    expect(passwordValidation.errorMessage).toBe(ErrorMessages.INVALID_PASSWORD);
});

test('Has a password without letters', () => {
    const invalidPassword: string = '1234567@';
    let passwordValidation: InputValidation = validatePassword(invalidPassword);
    expect(passwordValidation.isValidInput).toBe(false);
    expect(passwordValidation.errorMessage).toBe(ErrorMessages.INVALID_PASSWORD);
});

test('Has a valid password', () => {
    const validPassword: string = 'abcd1234';
    let passwordValidation: InputValidation = validatePassword(validPassword);
    expect(passwordValidation.isValidInput).toBe(true);
    expect(passwordValidation.errorMessage).toBeUndefined();
});

test('Has a role not defined', () => {
    const invalidRole: string = 'estagiario';
    let roleValidation: InputValidation = validateRole(invalidRole);
    expect(roleValidation.isValidInput).toBe(false);
    expect(roleValidation.errorMessage).toBe(ErrorMessages.INVALID_ROLE);
});

test('Has a valid role', () => {
    const validRole: string = 'user';
    let roleValidation: InputValidation = validateRole(validRole);
    expect(roleValidation.isValidInput).toBe(true);
    expect(roleValidation.errorMessage).toBeUndefined();
});

test('Has a phone that is too short', () => {
    const invalidPhone: string = '119888777';
    let phoneValidation: InputValidation = validatePhone(invalidPhone);
    expect(phoneValidation.isValidInput).toBe(false);
    expect(phoneValidation.errorMessage).toBe(ErrorMessages.INVALID_PHONE);
});

test('Has a valid phone', () => {
    const validPhone: string = '11944443333';
    let phoneValidation: InputValidation = validatePhone(validPhone);
    expect(phoneValidation.isValidInput).toBe(true);
    expect(phoneValidation.errorMessage).toBeUndefined();
});

test('Has a too old birth date', () => {
    const invalidBirth: string = '01/01/1900';
    let birthValidation: InputValidation = validateBirth(invalidBirth);
    expect(birthValidation.isValidInput).toBe(false);
    expect(birthValidation.errorMessage).toBe(ErrorMessages.INVALID_BIRTH);
});

test('Has a birth date in the future', () => {
    const invalidBirth: string = '01/01/2030';
    let birthValidation: InputValidation = validateBirth(invalidBirth);
    expect(birthValidation.isValidInput).toBe(false);
    expect(birthValidation.errorMessage).toBe(ErrorMessages.INVALID_BIRTH);
});

test('Has a valid birth date', () => {
    const validBirth: string = '12/12/1998';
    let birthValidation: InputValidation = validateBirth(validBirth);
    expect(birthValidation.isValidInput).toBe(true);
    expect(birthValidation.errorMessage).toBeUndefined();
});

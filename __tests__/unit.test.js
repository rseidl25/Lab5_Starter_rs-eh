// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Testing isPhoneNumber
test('isPhoneNumber with a valid phone number (123-456-7890)', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber with a valid phone number with parentheses (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber with an invalid phone number (1234567890)', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('isPhoneNumber with an invalid phone number format (123-45-6789)', () => {
  expect(isPhoneNumber('123-45-6789')).toBe(false);
});

// Testing isEmail
test('isEmail with a valid email (example@test.com)', () => {
  expect(isEmail('example@test.com')).toBe(true);
});

test('isEmail with a valid email (user123@domain.co)', () => {
  expect(isEmail('user123@domain.co')).toBe(true);
});

test('isEmail with an invalid email (user@domain)', () => {
  expect(isEmail('user@domain')).toBe(false);
});

test('isEmail with an invalid email (user.com)', () => {
  expect(isEmail('user.com')).toBe(false);
});

// Testing isStrongPassword
test('isStrongPassword with a valid password (Pass1234)', () => {
  expect(isStrongPassword('Pass1234')).toBe(true);
});

test('isStrongPassword with a valid password (A1b2C3)', () => {
  expect(isStrongPassword('A1b2C3')).toBe(true);
});

test('isStrongPassword with an invalid password (1234)', () => {
  expect(isStrongPassword('1234')).toBe(false);
});

test('isStrongPassword with an invalid password (PasswordTooLong12345)', () => {
  expect(isStrongPassword('PasswordTooLong12345')).toBe(false);
});

// Testing isDate
test('isDate with a valid date (12/31/2024)', () => {
  expect(isDate('12/31/2024')).toBe(true);
});

test('isDate with a valid date (1/1/2024)', () => {
  expect(isDate('1/1/2024')).toBe(true);
});

test('isDate with an invalid date (12/31/24)', () => {
  expect(isDate('12/31/24')).toBe(false);
});

test('isDate with an invalid date (311/12/2024)', () => {
  expect(isDate('311/12/2024')).toBe(false);
});

// Testing isHexColor
test('isHexColor with a valid hex color (#1a2b3c)', () => {
  expect(isHexColor('#1a2b3c')).toBe(true);
});

test('isHexColor with a valid hex color (#abc)', () => {
  expect(isHexColor('#abc')).toBe(true);
});

test('isHexColor with an invalid hex color (#12345)', () => {
  expect(isHexColor('#12345')).toBe(false);
});

test('isHexColor with an invalid hex color (123xyz)', () => {
  expect(isHexColor('123xyz')).toBe(false);
});

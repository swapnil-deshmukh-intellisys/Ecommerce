import { ValidationUtil } from './validation.util';

describe('ValidationUtil', () => {

  // F2P Test: This test will fail initially, then pass after implementation
  describe('email validation', () => {
    it('should validate correct email format', () => {
      const validEmails = [
        'test@example.com',
        'user.name@domain.co.uk',
        'user+tag@example.org'
      ];

      validEmails.forEach(email => {
        expect(ValidationUtil.isValidEmail(email)).toBe(true);
      });
    });

    it('should reject invalid email format', () => {
      const invalidEmails = [
        'invalid-email',
        '@example.com',
        'test@',
        'test.example.com'
      ];

      invalidEmails.forEach(email => {
        expect(ValidationUtil.isValidEmail(email)).toBe(false);
      });
    });
  });

  // P2P Test: Basic functionality test
  describe('phone validation', () => {
    it('should validate correct phone number format', () => {
      const validPhones = [
        '+1234567890',
        '123-456-7890',
        '(123) 456-7890'
      ];

      validPhones.forEach(phone => {
        expect(ValidationUtil.isValidPhone(phone)).toBe(true);
      });
    });

    it('should reject invalid phone number format', () => {
      const invalidPhones = [
        '123',
        'abc123',
        '123-456'
      ];

      invalidPhones.forEach(phone => {
        expect(ValidationUtil.isValidPhone(phone)).toBe(false);
      });
    });
  });

  // Additional P2P Test
  describe('required field validation', () => {
    it('should return false for empty values', () => {
      expect(ValidationUtil.isRequired('')).toBe(false);
      expect(ValidationUtil.isRequired(null)).toBe(false);
      expect(ValidationUtil.isRequired(undefined)).toBe(false);
    });

    it('should return true for non-empty values', () => {
      expect(ValidationUtil.isRequired('test')).toBe(true);
      expect(ValidationUtil.isRequired(0)).toBe(true);
      expect(ValidationUtil.isRequired(false)).toBe(true);
    });
  });
});

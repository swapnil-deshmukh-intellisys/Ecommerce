export class ValidationUtil {
  
  static isValidEmail(email: string): boolean {
    if (!email || typeof email !== 'string') {
      return false;
    }
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  static isValidPhone(phone: string): boolean {
    if (!phone || typeof phone !== 'string') {
      return false;
    }
    
    // Remove all non-digit characters for validation
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Check if it's a valid phone number (10-15 digits)
    return cleanPhone.length >= 10 && cleanPhone.length <= 15;
  }

  static isRequired(value: any): boolean {
    if (value === null || value === undefined) {
      return false;
    }
    
    if (typeof value === 'string') {
      return value.trim().length > 0;
    }
    
    return true;
  }

  static isValidPassword(password: string): boolean {
    if (!password || typeof password !== 'string') {
      return false;
    }
    
    // Password must be at least 8 characters with at least one uppercase, one lowercase, and one number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  static isValidUrl(url: string): boolean {
    if (!url || typeof url !== 'string') {
      return false;
    }
    
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  static isValidNumber(value: any): boolean {
    return !isNaN(value) && isFinite(value);
  }

  static sanitizeInput(input: string): string {
    if (!input || typeof input !== 'string') {
      return '';
    }
    
    return input.trim().replace(/[<>]/g, '');
  }
}

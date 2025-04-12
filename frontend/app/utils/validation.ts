export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export function validateEmail(email: string): string {
  if (!email) return "Email is required";
  if (!emailRegex.test(email)) return "Please enter a valid email address";
  return "";
}

export function validatePassword(password: string): string {
  if (!password) return "Password is required";
  if (!passwordRegex.test(password)) {
    return "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
  }
  return "";
}

export function validateConfirmPassword(
  password: string,
  confirmPassword: string
): string {
  if (!confirmPassword) return "Please confirm your password";
  if (password !== confirmPassword) return "Passwords do not match";
  return "";
}

export function validateName(name: string): string {
  if (!name) return "Name is required";
  if (name.length < 2) return "Name must be at least 2 characters long";
  return "";
}

export function validateRequired(value: string, fieldName: string): string {
  if (!value) return `${fieldName} is required`;
  return "";
}

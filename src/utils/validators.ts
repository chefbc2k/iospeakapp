export const isValidEmail = (email: string) => {
  // Implement email validation logic
  return /\S+@\S+\.\S+/.test(email);
};

export const isValidPassword = (password: string) => {
  // Implement password validation logic
  return password.length >= 8;
};
/* Regular Expressions */
export const PASSWORD_VALIDATION_REG_EX = {
  uppercase: /(?=.*[A-Z])/,
  lowercase: /(?=.*[a-z])/,
  minchars: /(?=.{8,})/,
  symbol: /(?=.*[!@#$%^])/,
  digits: /(?=.*[0-9])/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^])(?=.{8,})/,
};

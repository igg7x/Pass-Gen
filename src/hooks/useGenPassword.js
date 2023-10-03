import { NUMBERS, LOWERCASE, SYMBOLS, UPPERCASE } from "../constants/constants";

const useGenPassword = (values, length) => {
  let password = "";
  let chars = "";
  if (values.uppercase) chars += UPPERCASE;
  if (values.lowercase) chars += LOWERCASE;
  if (values.numbers) chars += NUMBERS;
  if (values.symbols) chars += SYMBOLS;
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

export default useGenPassword;

export function checkPassword(password) {
  if (password.length < 4) {
    return 'Password must have at least 8 characters';
  }
  // if (!/\d/.test(password)) {
  //   return 'Password must contain at least one number';
  // }
  // if (!/[a-z]/.test(password)) {
  //   return 'Password contains at least one lowercase letter';
  // }
  // if (!/[A-Z]/.test(password)) {
  //   return 'Password must contain at least one uppercase letter';
  // }
  // if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
  //   return 'Password must contain at least one special character';
  // }

  return true;
}

/**
 * Check input password is following password format
 *  - At least 8 characters
 *  - At most 20 characters
 *  - At least 1 lowercase alphabet
 *  - At least 1 uppercase alphabet
 *  - At least 1 number
 *  - At least 1 special character $, @, !, %, *, ?, &, +, =, -
 *
 * @param {string} password}
 * @returns {boolean}
 */
export const passwordValidation = (password: string): boolean => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@!%*?&+=-])[A-Za-z\d$@!%*?&+=-]{8,20}$/;
  return regex.test(password);
};

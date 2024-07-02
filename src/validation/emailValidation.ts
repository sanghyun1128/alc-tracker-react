/**
 * Check input email is following email format
 *
 * @param {string} email
 * @returns {boolean}
 */
export const emailValidation = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(String(email).toLowerCase());
};

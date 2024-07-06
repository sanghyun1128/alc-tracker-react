/**
 * Check nickname is following format
 *  - At least 2 characters
 *  - At most 15 characters
 *  - Only alphabets, numbers, and Korean characters
 *
 * @param {string} nickname
 * @returns {boolean}
 */
export const nicknameValidation = (nickname: string): boolean => {
  const regex = /^(?=.*[a-zA-Z0-9가-힣])[a-zA-Z0-9가-힣]{2,15}$/;
  return regex.test(String(nickname));
};

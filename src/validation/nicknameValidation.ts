/**
 * Check nickname is following format
 *  - At least 2 characters
 *  - At most 15 characters
 *  - Only allow alphanumeric characters, whitespace, and Korean characters
 *
 * @param {string} nickname
 * @returns {boolean}
 */
export const nicknameValidation = (nickname: string): boolean => {
  const regex = /^[\w\sㄱ-ㅎㅏ-ㅣ가-힣]{2,15}$/;
  return regex.test(String(nickname));
};

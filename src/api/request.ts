import axios from './axios';

export const requests = {
  /**
   * Sign in with email and password using Basic Auth.
   *
   * @method POST
   * @endpoint /auth/login/email
   * @param email - The user's email address.
   * @param password - The user's password.
   * @returns A Promise resolving to the login response.
   */
  login: (email: string, password: string) => {
    const credentials = `${email}:${password}`;
    const encodedCredentials = window.btoa(credentials);

    return axios.post(
      'auth/login/email',
      {}, // empty body
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${encodedCredentials}`,
        },
      },
    );
  },
};

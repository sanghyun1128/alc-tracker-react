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
  emailLogin: (email: string, password: string) => {
    const credentials = `${email}:${password}`;
    const encodedCredentials = window.btoa(credentials);

    return axios.post(
      'auth/login/email',
      {}, // empty body
      {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      },
    );
  },

  /**
   * Retrieve a new access token.
   *
   * @method POST
   * @endpoint /auth/token/access
   * @returns A Promise resolving to the access token response.
   */
  getAccessToken: () => {
    return axios.post('auth/token/access');
  },

  /**
   * Retrieve a new refresh token using the current refresh token.
   *
   * @method POST
   * @endpoint /auth/token/refresh
   * @returns A Promise resolving to the refresh token response.
   */
  getRefreshToken: () => {
    return axios.post('auth/token/refresh');
  },

  /**
   * Get the profile details of the currently logged in user.
   *
   * @method GET
   * @endpoint /users/profile/my
   * @returns A Promise resolving to the user's profile data.
   */
  getMyProfile: () => {
    const accessToken = localStorage.getItem('accessToken');

    return axios.get(`users/profile/my`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};

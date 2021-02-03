/**
 * Save token cookies
 * @param {string} data
 * @returns {object} Message and Status
 */
export const setTokenAuth = (data) => {
  sessionStorage.setItem('token', data);
  return {
    message: "Token saved success",
    error: false
  }
}

/**Get token cookies
 *@returns {object} data
 */
export const getTokenAuth = () => ({
  message: "Token loaded success",
  error: false,
  token: sessionStorage.getItem('token')
})

/**Delete token cookies
 * @returns {object} Message and Status
*/
export const deleteTokenAuth = () => ({
  message: "Token delete success",
  error: false
})
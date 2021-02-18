/** Save token cookies
 * @param {string} name
 * @param {string} data
 * @returns {object} Message and Status
 */
export const setSessionData = (name, payload) => {
  sessionStorage.setItem(name, payload);
  return {
    message: "Saved success",
    error: false,
  };
};

/**Get token cookies
 * @param {string} name
 *@returns {object} data
 */
export const getSessionData = (name) => ({
  message: "Loaded success",
  error: false,
  data: sessionStorage.getItem(name),
});

/**Delete token cookies
 * @returns {object} Message and Status
 */
export const deleteSessionData = (name) => {
  sessionStorage.removeItem(name);
  return {
    message: "Delete success",
    error: false,
  };
};
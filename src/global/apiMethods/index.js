import axios from 'axios';
import { getTokenAuth } from '../sessionStore'
import { API_BASE_URL } from '../config';


const loadToken = (authRequired = false) => (
  authRequired ? { Authorization: `Bearer ${getTokenAuth().token}` } : {}
)

/** API Petition
 * @param {string} uri required
 * @param {boolean} authRequired optional
 * @param {string} urlBase optional
 * @returns {object} promise
*/
export const apiGet = (uri, authRequired = false, urlBase = API_BASE_URL) => (
  axios.get(`${urlBase}${uri}`, { headers: loadToken(authRequired) })
)

/** API Petition
 * @param {string} uri required
 * @param {object} data required
 * @param {boolean} authRequired optional
 * @param {string} urlBase optional
 * @returns {object} promise
*/
export const apiPost = (uri, data, authRequired = false, urlBase = API_BASE_URL) => (
  axios.post(`${urlBase}${uri}`, data, { headers: loadToken(authRequired) })
)

/**API Petition
 * @param {string} uri required
 * @param {string} _id required
 * @param {boolean} authRequired optional
 * @param {string} urlBase optional
 * @returns {object} promise
 */
export const apiDelete = (uri, authRequired = false, urlBase = API_BASE_URL) => (
  axios.delete(`${urlBase}${uri}`, { headers: loadToken(authRequired) })
)

/**API Petition
 * @param {string} uri required
 * @param {string} _id required
 * @param {object} data required
 * @param {boolean} authRequired optional
 * @param {string} urlBase optional
 * @returns {object} promise
 */
export const apiUpdate = (uri, _id, data, authRequired = false, urlBase = API_BASE_URL) => (
  axios.put(`${urlBase}${uri}${_id}`, data, { headers: loadToken(authRequired) })
)

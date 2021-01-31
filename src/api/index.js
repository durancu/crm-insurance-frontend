import axios from 'axios';
import { API_BASE_URL } from '../global/config';

/** API Petition
 * @param {string} url
 * @returns {object} promise
*/
export const apiGet = (url, urlBase = API_BASE_URL) => axios.get(`${urlBase}${url}`);

/** API Petition
 * @param {string} url
 * @param {object} data
 * @returns {object} promise
*/
export const apiPost = (url, data, urlBase = API_BASE_URL) => axios.post(`${urlBase}${url}`,data);
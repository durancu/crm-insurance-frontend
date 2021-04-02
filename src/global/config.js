/** @constant {string} API_BASE_URL*/
//const url= process.env.API_BASE_URL? process.env.API_BASE_URL : "https://arane-crm-vl17-be-stg.herokuapp.com"
export const API_BASE_URL = process.env.REACT_APP_API_URL;

export const IpCheckStatusCodes = {
    UNAUTHORIZED: 0,
    AUTHORIZED: 1,
    UNCHECKED: 2,
}

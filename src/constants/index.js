const defaultThrekitEnv = 'admin-fts.threekit.com'
const assetsBaseUrl = `https://${process.env.REACT_APP_THREEKIT_ENV || defaultThrekitEnv}/api/assets?`;
const assetsParams = ['bearer_token', 'tags'];
const tagName = 'AR';

export const THREEKIT_AUTH_TOKEN = process.env.REACT_APP_THREEKIT_AUTH_TOKEN;

export const assetsUrl = `${assetsBaseUrl + assetsParams[0]}=${THREEKIT_AUTH_TOKEN}&${assetsParams[1]}=${tagName}`;

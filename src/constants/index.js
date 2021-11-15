
// assets URL data
const assetsBaseUrl = 'https://preview.threekit.com/api/assets?';
const assetsParams = ['bearer_token', 'tags'];
export const THREEKIT_AUTH_TOKEN = '31bae9f8-18d7-4e8a-8b28-bdd680d0ecd0';
const tagName = 'LOD';
export const page2 = '&page=2';
export const assetsUrl = `${assetsBaseUrl + assetsParams[0]}=${THREEKIT_AUTH_TOKEN}&${assetsParams[1]}=${tagName}`;

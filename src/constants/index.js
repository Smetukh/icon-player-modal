
// assets URL data
const assetsBaseUrl = 'https://preview.threekit.com/api/assets?';
const assetsParams = ['bearer_token', 'tags'];
const THREEKIT_AUTH_TOKEN = '59868a4b-25d0-48ae-9604-012e1071af3d';
const tagName = 'LOD';
export const page2 = '&page=2';
export const assetsUrl = `${assetsBaseUrl + assetsParams[0]}=${THREEKIT_AUTH_TOKEN}&${assetsParams[1]}=${tagName}`;

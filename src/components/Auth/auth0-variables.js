export const AUTH_CONFIG = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientID: process.env.REACT_APP_AUTH0_CLIENTID,
  redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
  responseType: process.env.REACT_APP_AUTH0_RESPONSE_TYPE,
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  scope: process.env.REACT_APP_AUTH0_SCOPE,
  url: process.env.REACT_APP_API_URL,
}

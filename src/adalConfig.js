import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';
 
export const adalConfig = {
  tenant: '2148ff5e-ab3d-4110-b9af-9932c53b44dd',
  clientId: '1dd5bae7-c617-4286-a696-eecfe4118e74',
  endpoints: {
    api: 'https://lsc-api.azurewebsites.net',
  },
  postLogoutRedirectUri: window.location.origin,
  redirectUri: 'http://localhost:3000',
  cacheLocation: 'localStorage',
};
 
export const authContext = new AuthenticationContext(adalConfig);
 
export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);
 
export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);

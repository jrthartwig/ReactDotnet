export const msalConfig = {
    auth: {
      clientId: "8a9c94fb-9150-4776-8b25-6baa4cdc9e8b",
      authority: "https://login.microsoftonline.com/9672e469-3c44-4a63-9838-c5154b41c0d0", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "https://localhost:44421/",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
  };
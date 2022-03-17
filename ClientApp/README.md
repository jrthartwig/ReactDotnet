## Auth ##
`authConfig.js` - this file contains the configuration of the application that is registered with Azure AD
- client id: the application id from the AD app registration 
- authority: login.microsoft.com/ the tenant id of the AD owning Azure tenant 
- redirectURI: where the authenticated user is redirected after they are authenticated 
- scopes: what the user is authorized to do
- graphMeEndpoint: national microsoft graph api 


`index.js`
- `MsalProvider` - imported from msal-react, application auth wrapper 
  - `instance`: property that takes a `Public Application`
- `Public Application`: imported from msal-browser
  - takes the configuration from the imported `authConfig` and a initializes a new "Public Application" - need to understand more about this  
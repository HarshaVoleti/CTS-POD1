// const msalConfig = {
//     auth: {
//       clientId: 'process.env.CILENTID',
//       authority: 'process.env.AUTHORITY',
//       redirectUri: 'process.env.REDIRECTURI',
//     },
//     cache: {
//       cacheLocation: 'localStorage',
//     },
//   };

  const msalConfig = {
    auth: {
      clientId: '0bcb521d-fd86-4cb1-889c-bbc25ee0610b',
      authority: 'https://login.microsoftonline.com/499881f9-8819-451e-ace7-4e600b7fc3e9',
      redirectUri: 'http://localhost:3000/redirect.html',
    },
    cache: {
      cacheLocation: 'localStorage',
    },
  };
  
  const msalInstance = new msal.PublicClientApplication(msalConfig);
  //
  async function login() {
    try {
      const loginRequest = {
        scopes: ['openid', 'profile'],
      };
  
      const authResponse = await msalInstance.loginPopup(loginRequest);
      const email = authResponse.idTokenClaims.email;

      // Show the email in a popup notification
      alert('Logged in successfully. Email: ' + email);
      const accessToken = await msalInstance.accessToken;
      console.log(accessToken);
      console.log('Authentication successful:', authResponse);
      window.location.href = '/home';
  
    } catch (error) {
      console.log('An error occurred during login:', error);
    }
  }
  async function checkloginstatus(){
    try {
      const accounts = msalInstance.getAllAccounts();
    }
    catch(error){
      console.log(error, "error occured");
    }
  }
  async function logout() {
    try {
      const loginRequest = {
        scopes: ['openid', 'profile'],
      };
  
      const authResponse = await msalInstance.logout();
      console.log('logout successful:', authResponse);
      window.location.href = '/';
      
      // Redirect to the protected page or perform additional actions
  
    } catch (error) {
      console.log('An error occurred during logout:', error);
    }
  }
  
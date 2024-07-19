// auth.js
const auth = {
    login: (username, password) => {
      // Simulate login with hardcoded credentials (replace with actual authentication logic)
      return new Promise((resolve, reject) => {
        if (username === 'admin' && password === 'password') {
          localStorage.setItem('isLoggedIn', true);
          resolve(true);
        } else {
          reject(new Error('Invalid username or password'));
        }
      });
    },
  
    logout: () => {
      // Simulate logout by removing session token
      localStorage.removeItem('isLoggedIn');
    },
  
    isLoggedIn: () => {
      // Check if user is logged in by verifying session token
      return localStorage.getItem('isLoggedIn');
    },
  };
  
  export default auth;
  
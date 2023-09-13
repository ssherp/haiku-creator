// import decode to use for decoding token and getting user info
import decode from 'jwt-decode';

// create a new class to instantiate a new AuthService object
class AuthService {
    // get token from local storage
    getProfile() {
        return decode(this.getToken());
    }

    // check if there is a saved token and it's still valid
    loggedIn() {
        // check if there is a saved token and it's still valid
        const token = this.getToken();
        // use type coersion to check if token is NOT undefined and the token is NOT expired
        return token && !this.isTokenExpired(token) ? true : false;
    }

    // check if the token has expired
    isTokenExpired(token) {
        // decode the token to get its expiration time
        const decoded = decode(token);
        // check if the current time is past the token's expiration time
        if (decoded.exp < Date.now() / 1000) {
            // delete the token from localStorage
            localStorage.removeItem('id_token');
            // return true, indicating that the token has expired
            return true;
        }
        // return false, indicating the token has not expired
        return false;
    }

    // retrieve token from localStorage
    getToken() {
        // retrieve the user token from localStorage
        return localStorage.getItem('id_token');
    }

    // set token to localStorage and reload page to homepage
    login(idToken) {
        // save user token to localStorage
        localStorage.setItem('id_token', idToken);
        // reload page to homepage
        window.location.assign('/profile');
    }

    // clear token from localStorage and force logout with reload
    logout() {
        // clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        // reload page to homepage
        window.location.assign('/');
    }
}

// instantiate a new AuthService object
export default new AuthService();
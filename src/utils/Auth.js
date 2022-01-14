import Cookies from 'js-cookie';

// Reset local store on logout
export const logout = () => {
    window.localStorage.clear();
    return Cookies.remove('authToken');
}

export const isAuthorized = () => {
    return Cookies.get('authToken');
}
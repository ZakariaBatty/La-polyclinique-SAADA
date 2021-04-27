// save to local storage
export const saveAuthToLocalStorage = (jwt) => {
  localStorage.setItem('jwt', JSON.stringify(jwt));
};

// check if logged
export const isLogged = () => {
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
  } else {
    return false;
  }
};

// authentication
export const checkAuth = (authId) => {
  return isLogged().auth._id === authId;
};

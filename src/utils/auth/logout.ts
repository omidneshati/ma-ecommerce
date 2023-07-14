const logout = () => {
  localStorage.setItem('loggedIn', 'false');
};

export default logout;

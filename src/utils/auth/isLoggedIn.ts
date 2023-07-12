export default function isLoggedIn() {
  const loggedIn: boolean | null = Boolean(localStorage.getItem('loggedIn'));
  if (loggedIn) return true;
  return false;
}

export default function isLoggedIn() {
  const loggedIn: string | null = localStorage.getItem('loggedIn');
  if (loggedIn === 'true') return true;
  return false;
}

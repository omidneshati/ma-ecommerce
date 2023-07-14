export default function login({ name, password }: { name: string; password: string }): boolean {
  const storedName: string | null = localStorage.getItem('name');
  const storedPassword: string | null = localStorage.getItem('password');
  if (name === storedName && password === storedPassword) {
    localStorage.setItem('loggedIn', 'true');
    return true;
  }
  // localStorage.setItem('loggedIn', 'true');
  return false;
}

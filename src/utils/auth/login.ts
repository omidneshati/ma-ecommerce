export default function login({ name, password }: { name: string; password: string }) {
  const storedName: string | null = localStorage.getItem('name');
  const storedPassword: string | null = localStorage.getItem('password');
  if (name === storedName && password === storedPassword) return true;
  return false;
}

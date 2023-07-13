export default function register({ name, password }: { name: string; password: string }) {
  localStorage.setItem('name', name);
  localStorage.setItem('password', password);
}

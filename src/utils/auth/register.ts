export default function register({ name, phone }: { name: string; phone: number }) {
  localStorage.setItem('name', name);
  localStorage.setItem('phone', phone.toString());
}

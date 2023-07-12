export default function resetPassword(password: string) {
  localStorage.setItem('password', password);
}

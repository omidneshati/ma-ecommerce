export default function resetPassword({ password }: { code?: string; password: string }) {
  localStorage.setItem('password', password);
}

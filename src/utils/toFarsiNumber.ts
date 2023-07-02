export default function toFarsiNumber(n: number) {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  return n.toString().replace(/\d/g, (x) => {
    console.log(x);
    return farsiDigits[Number(x)];
  });
}

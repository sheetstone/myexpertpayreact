const bankList = [
  'Chase',
  'Bank of America',
  'Citi Bank',
  'U.S. Corp',
  'Wells Fargo',
  'PNC',
  'Capital One',
];

export default async function resolveBankName(data) {
  const l = bankList.length;
  const rand = Math.floor(Math.random() * l);
  return bankList[rand];
}

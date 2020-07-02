const bankList = [
  'Chase',
  'Bank of America',
  'Citi Bank',
  'U.S. Corp',
  'Wells Fargo',
  'PNC',
  'Capital One',
];

/*
* Resolve should be async function, get data from API, to search the bank name with the right routine number
*/
export default async function resolveBankName(data) {
  const l = bankList.length;
  const rand = Math.floor(Math.random() * l);
  return bankList[rand];
}

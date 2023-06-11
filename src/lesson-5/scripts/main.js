const date = '2020-11-26';
const getDate = (str) => {
  const re = /(?<year>\d{2,4})-(?<month>\d{1,2})-(?<day>\d{1,2})/;
  const arr = str.split('-');
  if (arr[1] > 12 || arr[2] > 31) {
    return console.log('Введи корректную дату!');
  }
  return str.replace(re, '$<day>.$<month>.$<year>');
};
console.log(getDate(date));

// //======№1======
// let user = 'John Doe';
// console.log(user);
//
// const student = 'Maksim';
// console.log(student);
//
// user = student;
//
// console.log(user);
//
// //======№2======
// let test = 1;
// test++;
// test += '1';
//
// // Ответ: Строка 21. Любое сложение number и string = string.
// console.log(test);
//
// test -= 1;
// // Ответ: Строка 20. Вычитание приводится к number.
// console.log(test);
//
// test = Boolean(test);
// // Ответ: true.
// console.log(test);
//
// //======№3======
// const arr1 = [2, 3, 5, 8];
// let res1 = 1;
//
// for (let i = 0; i < arr1.length; i++) {
//   res1 *= arr1[i];
// }
// console.log(res1);
//
// //======№4======
// const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
//
// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i] > 5 && arr2[i] < 10) {
//     console.log(arr2[i]);
//   }
// }
//
// //======№5======
// const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
//
// for (let i = 0; i < arr3.length; i++) {
//   if (arr3[i] % 2 === 0) {
//     console.log(arr3[i]);
//   }
// }

//======FUNCTION MIN(MAX)======
const min = (a, b) => {
  if (a < b) {
    return a;
  }
  return b;
};
console.log(min(5, 6));

const max = (a, y) => {
  return Math.max(a, y);
};
console.log(max(5, 6));

const minTern = (a, b) => {
  return (a, b) ? a : b;
};
console.log(minTern(5, 6));

//======FUNCTION PALINDROME======
const isPalindrome = (string) => {
  let reverse = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse === string;
};
console.log(isPalindrome('шалаш'));

//======FUNCTION ZERO======
const getRandom = () => {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    const num = Math.floor(Math.random() * 101);
    arr[i] = num;
  }
  return arr;
};
const arr = getRandom();
console.log(arr);

const getTransformation = (array) => {
  const res = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i].toString();
    if (!value.includes('0')) {
      res[i] = +value;
    } else {
      let zeroString = '';
      for (let j = 0; j < value.length; j++) {
        if (value[j] === '0') {
          zeroString += 'zero';
        } else {
          zeroString += value[j];
        }
      }
      res[i] = zeroString;
    }
  }
  return res;
};
console.log(getTransformation(arr));

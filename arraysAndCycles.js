// 1

// const arrayOfMovies = ["The Fellowship of The Ring", "The Two Towers", "The Return Of The King", "An Unexpected Journey", "The Desolation of Smaug", "The Battle of The Five Armies"];
// console.log(arrayOfMovies);

// 2

// const arrayOfCarManufacturers = ["Ford", "Mercedes", "Volkswagen", "Kia", "Toyota"];
// let stringFromArray = arrayOfCarManufacturers [0];
// let i = 1;
// do {
//     stringFromArray += ', ' + arrayOfCarManufacturers [i];
//     i++;
// } while (i <= 4);
// console.log(stringFromArray);
// let arrFromString = stringFromArray.split(',');
// console.log(arrFromString);

// 3

// const names = ['Alex', 'Kate', 'Dennis', 'Serge']
// names.forEach(name => console.log('Hello ' +  name));

// 4

// const numbers = [1, 0, 2, 4, 5].map(number => Boolean(number));
// console.log(numbers);

// 5

// const arrayOfNumbers = [1,6,7,8,3,4,5,6];
// arrayOfNumbers.sort((a, b) => b - a);
// console.log(arrayOfNumbers);

// 6

// const arr = [1,6,7,8,3,4,5,6];
// const arr2 = arr.filter(currentNumber => currentNumber > 3);
// console.log(arr2);

// 7

// var 1
// let arrNumbers = [3, 7, 8, 6, 6, 1, 9, 4, 2];
// let anyNumber;
// function outputNumber (arrNumbers, anyNumber) {
//     for (let i = 0; i < arrNumbers.length; i++) {
//         if (arrNumbers[i] == anyNumber) {
//             console.log(i)
//             //break;
//         }
//     }
// }


// var 2
// function outputNumber (arrNumbers, anyNumber) {
//     let i = 0;
//     while (arrNumbers.length > i) {
//         if (arrNumbers[i] == anyNumber) {
//             console.log(i)
//             //break;
//         }
//         i++;
//     }
// }
// outputNumber(arrNumbers, 6);

// 8

// let a = 0;
// while (a < 10) {
//     console.log(a);
//     a++;
// }

// 9

// const number = 100;
// for (let i = 1; i <= number; i++) {
//   for (let j = 2; j <= i; j++) {
//     if (i % j === 0 && j < i) {
//       break;
//     } else if (j === i) {
//       console.log(i);
//     }
//   }
// }


// 10

// let i = 0;
// do {
//     if (i % 2 !== 0) {
//     console.log(i);
//     i++;
// } else {
//     i++;
// }
// } while (i < 10);
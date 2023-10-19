
            // Задание 1

// function SumNum(){
// let Num1 = Num(prompt("Input num"));
// let Num2 = Num(prompt("Input num"));
// let sum = 0;

// if (Num1 < Num2) {
//     while (Num1 <= Num2) {
//     sum += Num1
//     Num1++;
// };
//  } else if (Num1 > Num2) {
//     while (Num1 >= Num2) {
//         sum += Num2
//         Num2++;
//     };
//  } console.log(`${sum}`)
// }
// SumNum()

// ЗАДАНИЕ 2
// function disiors1() { 
// let num1 = parseInt(prompt('input 1 num'));
// let num2 = parseInt(prompt('input 2 num'));

// while (num2 !== 0) {
//   let remainder = num1 % num2;
//   num1 = num2;
//   num2 = remainder;
// }

// console.log('High divisiors', num1);
// }
// disiors1()



//  ЗАДАНИЕ 3
// function divisors2() {
// let num = parseInt(prompt('Input num'));

// console.log('divisiors this num', num, ':');
// for (let i = 1; i <= num; i++) {
//   if (num % i === 0) {
//     console.log(i);
//   }
// }
// }
// divisors2()





             // ЗАДАНИЕ 4  
// function howNum() {
// let num = parseInt(prompt('Input your num'));
// let str = 0;          
// for (let i = num; i > 0; i = Math.floor(i / 10)) {
//  str++;
// }      
// console.log('В данной строке', str);
// }
// howNum();


//  Задание 5
// function numbers() {
// let positive = 0;
// let negative = 0;
// let zero = 0;
// let even = 0;
// let odd = 0;

// for (let i = 0; i < 10; i++) {
//   let number = +prompt("input num use space");
//   if (number > 0) {
//     positive++;
//   } else if (number < 0) {
//     negative++;
//   } else {
//     zero++;
//   }
//   if (number % 2 === 0) {
//     even++;
//   } else {
//     odd++;
//   }
// }

// console.log("положительные " + positive);
// console.log("отрицательные " + negative);
// console.log("нули " + zero);
// console.log("четные " + even);
// console.log("нечетные " + odd);
// }
// numbers()



// ЗАДАНИЕ 6
// function calc() {
//     while (true) {
//         let num1 = prompt("1 number:");
//         let num2 = prompt("2 number:");
//         let operator = prompt("input (+, -, *, /):");

//         num1 = Number(num1);
//         num2 = Number(num2);
//         let result;

//         if (operator === "+") {
//           result = num1 + num2;
//         } else if (operator === "-") {
//           result = num1 - num2;
//         } else if (operator === "*") {
//           result = num1 * num2;
//         } else if (operator === "/") {
//           result = num1 / num2;
//         } else {
//           console.log("I don't no");
//           continue;
//         }
//         console.log("Result", result);
//         let answer = prompt("Maybe repeat? (yes/no)");
//         if (answer.toLowerCase() !== "Yes") {
//             break;
//         }
//       }
//     }

// calc()

// ЗАДАНИЕ 7
// function moveNum() {
// let number = prompt("Input numbers use space");
// let move = prompt("where to move the number");
// let moveedNumber = number.slice(move) + number.slice(0, move);
// console.log(moveedNumber);
// }
// moveNum()


// ЗАДАНИЕ 8







// ЗАДАНИЕ 9

function multiplication() {
    for (let i = 2; i <= 9; i++) {
        console.log(`table multiplication this number${i}:`);
        for (let j = 1; j <= 10; j++) {
          console.log(`${i} * ${j} = ${i * j}`);
        }
        console.log("---------------");
      }
}



// ЗАДАНИЕ 10
// let j = prompt('Input number')
// let y = Number(j);

// for (i = 0; i <= y; i++) {
//     console.log(i)
// }


// var start = parseInt(prompt("Введите начало диапазона: "));
// var end = parseInt(prompt("Введите конец диапазона: "));

// console.log("Простые числа в диапазоне от", start, "до", end, " :");


// for (var num = start; num <= end; num++) {
 
//     var isPrime = true;
//     if (num > 1) {
//         for (var i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     } else {
//         isPrime = false;
//     }
    
 
//     if (isPrime) {
//         console.log(num);
//     }
// }


let num = prompt('Input your number');
let f = Number(num);

for (let i = 0; i <= f; f++) {
    if (f > i) {
        f % 2 === 0;
        console.log('hellow world')
    } else {
        console.log('warrning')
    }
}






























//                     //  This is for


// // let text = ['apple', 'orange', 'grape', 'peach', 'salt', 'butter', 'apple', 'orange', 'grape', 'peach', 'salt', 'butter']
// // for (let i = text.length; i > 0; i--)
// // console.log(text[i - 4])

//                             // This is while
    
// // let x = '';
// // while (x.length < 5) {
// // const value = prompt('Input a-z')
// // if (value.length == 0) {
// //     break;
// // }
// // x = x + value;
// // console.log(x);
// // }


//                                 // This i do

//     // let b = 0;
//     //  do {
//     //     console.log(b, 'xx')
//     //     b++;
//     // } while (b < 3) 


//     let text = ['apple', 'orange', 'grape']
//     // for (let i = text.length; i > 0; i--)
//     // console.log(text[i - 4])

//     // for (let letter of text) {
//     //     console.log('letter: ', letter);
//     // }

//     const user = {
//         name: 'josh',
//         age: '23',
//         isWarring: 'true'
//     };

//     for (let xx in user) {
//         if (xx === 'age') {
//             break;
//         }
//         console.log(xx, user[xx]);
//     }
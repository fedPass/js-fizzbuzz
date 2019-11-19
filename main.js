//soluzione multi if
 //  for (var i = 1; i <= 100; i++) {
 //     // multipli di 3 stampare "Fizz"
 //     if ([i] % 3 == 0) {
 //         console.log('Fizz');
 //     }
 //     // multipli di 5 stampare "Buzz"
 //     if ([i] % 5 == 0)  {
 //         console.log('Buzz');
 //     }
 //     // multipli di 3 e 5 stampare "FizzBuzz"
 //     if (([i] % 5 == 0) && ([i] % 3 == 0))  {
 //          console.log('FizzBuzz');
 //      }
 //     // numero che non soddisfa le condizioni prima
 //     if (([i] % 5 != 0) && ([i] % 3 != 0))  {
 //          console.log([i]);
 //      }
 // }

 // soluzione if else if - else
 for (var i = 1; i <= 100; i++) {
    // multipli di 3 stampare "Fizz"
    if ([i] % 3 == 0) {
        console.log('Fizz');
        if (([i] % 3 == 0) && ([i] % 5 == 0))  {
        // multipli di 5 stampare "Buzz"
            console.log('FizzBuzz');
        }
    } else if ([i] % 5 == 0)  {
    // multipli di 3 e 5 stampare "FizzBuzz"
         console.log('Buzz');
     } else {
     // numero che non soddisfa le condizioni prima
         console.log([i]);
     }
}

 // prova con switch
// for (var i = 1; i <= 99; i++) {
//     console.log([i]);
// }
//
// switch ([i]) {
//    case "1" :
//       [i] % 3 == 0;
//       console.log('Fizz');
//       break;
//   case "2" :
//     [i] % 5 == 0;
//     console.log('Buzz');
//     break;
//   case "3":
//     ([i] % 5 != 0) && ([i] % 3 != 0);
//     console.log('FizzBuzz');
//     break;
//   default:
//     console.log([i]);
//     break;
// }

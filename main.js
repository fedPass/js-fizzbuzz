



// Stampare tutti i numeri da 1 a 100
  for (var i = 1; i <= 100; i++) {
     // multipli di 3 stampare "Fizz"
     if ([i] % 3 == 0) {
         console.log('Fizz');
     }

     if ([i] % 5 == 0)  {
     // multipli di 5 stampare "Buzz"
         console.log('Buzz');
     }

     if (([i] % 5 == 0) && ([i] % 3 == 0))  {
     // multipli di 3 e 5 stampare "FizzBuzz"
          console.log('FizzBuzz');
      }

     if (([i] % 5 != 0) && ([i] % 3 != 0))  {
      // numero che non soddisfa le condizioni prima
          console.log([i]);
      }
 }

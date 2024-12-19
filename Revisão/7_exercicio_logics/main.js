//         Função verifica se um número é maior que outro

// function maiorDeDois(numUm, numDois) {
//   if (numUm > numDois) return numUm;
//   return numDois
// };


// const max = (x,y) => x > y ? x : y;

// console.log(maiorDeDois(3,20));
// console.log(max(3,5000));


//  Função verifica por valores entreguies se imgaem está em retrato ou paisagem


// function ePaisagem(a, l) {
//   return a > l ? 'Retrato' : 'Paisagem'
// }

// const eRetrato = (a, l) => a > l ? 'Retrato' : 'Paisagem'

// console.log(ePaisagem(768, 1080))
// console.log(eRetrato(2180, 1244))



//      FizzBuzz


function fizzBuzz(x) {
  if (typeof x !== 'number') return x
  if (x % 3 == 0 && x % 5 == 0) return 'FizzBuzz';
  if (x % 3 == 0) return 'Fizz';
  if (x % 5 == 0) return 'Buzz';
  return x
};
console.log('a', fizzBuzz('a'))
for (let i= 0;i <= 100; i++) {
  console.log(i, fizzBuzz(i))
}
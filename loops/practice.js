//1.  calculate the sum of n numbers
// let n = 100;
// let sum = 0;

// for (let i = 0; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

//2. calculate the sum of m to n numbers.
// let n = 100;
// let sum = 0;
// let m = 50;
// for (let i = m; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

//3.print all odd no 0n to n.
// let n = 100;
// for (let i = 0; i <= n; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

//4.create a Number Knock Game.
// let computerguess = 5;
// let guess=null;
// while (guess !== computerguess) {
//   guess = Number(prompt("Enter Your Guess!"));

//   if (isNaN(guess)) alert("Your Number is Invalid!");
//   else if (guess < computerguess) alert("Your Number is Low! Try Again ");
//   else if (guess > computerguess) alert("Your Number is High! Try Agian ");
//   else alert("Your Guess is Correct! You win");
// }

//5.simple password checker fixed attempt.
// let passwordDatabase = "ayush";
// let userPassword = null;
// let attemps = 0;

// while (passwordDatabase !== userPassword && attemps < 3) {
//   userPassword = prompt("Enter Your Password");
//   attemps++;
//   if (userPassword === passwordDatabase)
//     alert("Congratulations!! Your password is Matched");
//   else if (attemps >= 3) alert("You're reached your maximum attempts!");
//   else alert("Invalid Password!! try again");
// }

//calcculate how many vowels andd consenents in a given string using for of loop.

let str = "education";
let vowelCount = 0,
  consonentCount = 0;
for (let ltr of str) {
  if (
    ltr === "a" ||
    ltr === "e" ||
    ltr === "u" ||
    ltr === "i" ||
    ltr === "o" ||
    ltr === "A" ||
    ltr === "I" ||
    ltr === "O" ||
    ltr === "E" ||
    ltr === "U"
  )
    vowelCount++;
  else consonentCount++;
}
console.log("Vowels:", vowelCount);
console.log("Consenents:", consonentCount);

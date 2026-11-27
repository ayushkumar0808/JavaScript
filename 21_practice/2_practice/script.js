function outer() {
  let count = 0;
  console.log(count);

  function inner() {
    count++;
    return count;
  }
  return inner;
}

let c = outer();
console.log(c());
console.log(c());
console.log(c());

let d = outer();
console.log(d());
console.log(d());
console.log(d());

// class Car {
//   constructor(brand, color, mileage) {
//     this.brand = brand;
//     this.color = color;
//     this.mileage = mileage;
//   }
//   start() {
//     console.log("engin start");
//   }
//   stop() {
//     console.log("engine stop");
//   }
// }

// let bmw = new Car("bmw", "red", 43);
// let toyota = new Car("toyota", "blue", 33);
// let audi = new Car("audi", "green", 53);
// console.log(bmw, toyota, audi);

// let locgic = (n) => n % 2 == 0;

function myMap(fnlogic) {
  let resArr = [];
  for (let i = 0; i < this.length; i++) {
    if (fnlogic(this[i], i)) {
      resArr.push(this[i]);
    }
  }
  return resArr;
}

let arr = [2, 3, 4, 5, 6, 7];
// let res = myMap(arr, locgic);
// console.log(res);

Array.prototype.ayushfilter = myMap;

let res = arr.ayushfilter((e, i) => {
  console.log(e);
  console.log(i);
});
// console.log(res);

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

let res2 = arr2.ayushfilter((e) => {
  return e % 2 == 0;
});
console.log(res2);

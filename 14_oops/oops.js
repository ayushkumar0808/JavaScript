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

// Abstraction and encapsulation

// class Car {
//   #fuel = 100;

//   #getFuel() {
//     this.#fuel -= 1;
//     console.log(this.#fuel);
//   }
//   start() {
//     this.#getFuel();
//     console.log("engine start");
//   }
// }

// let c1 = new Car();
// c1.start();
// c1.start();

// class BankAcc {
//   #bal = 100;
//   #name;
//   constructor(acName, bal) {
//     this.#name = acName;
//     this.#bal = bal;
//   }

//   depo(bal) {
//     this.#bal += bal;
//   }

//   get details() {
//     console.log(`name:${this.#name} bal:${this.#bal}`);
//   }
//   set bal(bal) {
//     if (isNaN(bal)) {
//       return;
//     }

//     this.#bal = bal;
//   }
// }

// let ayush = new BankAcc("Ayush", 500);
// console.log(ayush);
// ayush.bal = "ayush";
// console.log(ayush.details);

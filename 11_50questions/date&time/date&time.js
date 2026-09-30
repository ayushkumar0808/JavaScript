// 44.**** guess the output
// let date = new Date(0);
// let date = new Date();
// console.log(date.toString());

// 45.**** validate the user's selected date range is no longer than 30 days
// let dateNow = new Date("2026-04-20");
// let userDate = new Date("2026-05-19");
// let diff = Math.floor((userDate - dateNow) / 1000 / 60 / 60 / 24);
// // console.log(diff);
// if (diff < 30) {
//   console.log("are bahut bahut bdhaiye hogya");
// } else {
//   console.log("ni hoga ab ");
// }

// 46.****calcute the diffrance between two dates in the form of year month day hour mint sec

let strt = "2026-04-29T02:45:34";
let end = "2027-05-26T05:34:23";

function getDiff(start, end) {
  let startDate = new Date(start);
  let endDate = new Date(end);
  let diff = (endDate - startDate) / 1000;
  let year = Math.floor(diff / (60 * 60 * 24 * 365));
  diff = diff % (60 * 60 * 24 * 365);
  let months = Math.floor(diff / (60 * 60 * 24 * 30));
  diff = diff % (60 * 60 * 24 * 30);
  let days = Math.floor(diff / (60 * 60 * 24));
  diff = diff % (60 * 60 * 24);
  let hours = Math.floor(diff / (60 * 60));
  diff = diff % (60 * 60);
  let minutes = Math.floor(diff / 60);
  let seconds = diff % 60;
  return `${year} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

let differece = getDiff(strt, end);
console.log(differece);

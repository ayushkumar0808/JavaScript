function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "manas kumar lal",
        data,
      });
    }, 1000);
  });
}

async function fetchData() {
  let data1 = await getData(1);
  console.log(data1);
  let data2 = await getData(2);
  console.log(data2);
  let data3 = await getData(3);
  console.log(data3);
  let data4 = await getData(4);
  console.log(data4);
  let data5 = await getData(5);
  console.log(data5);
}

fetchData();

async function fetchData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(data);
}

let btn = document.querySelector(".applyBtn");
let input = document.querySelector(".input");
let locatin = document.querySelector(".location");
btn.addEventListener("click", () => {
  console.log(input.value);
  let val = input.value;
  async function fetchWeather() {
    let response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=ff617a323b794fb494e135503261910&q=${val}&aqi=yes`,
    );
    let fetchData = await response.json();
    console.log(fetchData);
    locatin.innerHTML = val;
  }
  fetchWeather();
});

let btn = document.querySelector(".applyBtn");
let input = document.querySelector(".input");
let locatin = document.querySelector(".location");
let country = document.querySelector(".country");
let localtime = document.querySelector(".localtime");
let region = document.querySelector(".region");
let temp = document.querySelector(".temp");
btn.addEventListener("click", () => {
  let val = input.value;
  async function fetchWeather() {
    let response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=ff617a323b794fb494e135503261910&q=${val}&aqi=yes`,
    );
    let fetchData = await response.json();
    let { location, current } = fetchData;
    locatin.innerHTML = location.name;
    country.innerHTML = location.country;
    localtime.innerHTML = location.localtime;
    region.innerHTML = location.region;
    temp.innerHTML = `${current.temp_c}<sup>o</sup>C`;
  }
  fetchWeather();
});

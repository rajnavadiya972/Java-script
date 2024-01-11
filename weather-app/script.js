const btn = document.getElementById("searchButton");
const city = document.getElementById("city");

const cityName = document.getElementById("cityName");
const cityTime = document.getElementById("cityTime");
const cityTempF = document.getElementById("cityTempF");
const cityTempC = document.getElementById("cityTempC");

async function getData(cityname) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=80e4802f42334189b9d111236231912&q=${cityname}&aqi=yes`
  );
  return await promise.json();
}
btn.addEventListener("click", async () => {
  const val = city.value;
  const res = await getData(val);
  // console.log(res);
  cityName.innerText = `${res.location.name}, ${res.location.region}, ${res.location.country}`;
  cityTime.innerText = `${res.location.localtime}`;
  cityTempC.innerText = `${res.current.temp_c} °C`;
  cityTempF.innerText = `${res.current.temp_f} °F`;
});

function refreshWeather(response) {
  console.log(response);
}
/** axios api Forecast Weather */

let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query={query}&key=46f53o0114a0et1fb464bc0d734f573e&units=metric`;
axios.get(apiUrl).then(refreshWeather);

function displayForecast() {
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
     <div class="weather-forecast-day">
            <div class="weather-forecast-date">${day}</div>
            <div class="weather-forecast-icon">🌤️</div>
            <div class="weather-forecast-temperatures">
              <div class="weather-forecast-temperature">
                <strong>15º</strong>
              </div>
              <div class="weather-forecast-temperature">9º</div>
            </div>
          </div>
    `;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

displayForecast();

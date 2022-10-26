window.addEventListener('load', () => {
  let long;
  let lat;
  let weatherDescriptions = document.querySelector('.weather-descriptions');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimezone = document.querySelector('.location-timezone');
  let wind = document.querySelector('.wind');
  let temperatureSection = document.querySelector('.temperature');
  const temperatureSpan = document.querySelector('.temperature span');


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = 'http://api.weatherstack.com/forecast?access_key=9f7d1c110252fdb1473071d3c74c311d&query=Berlin'


      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          const { temperature, weather_descriptions } = data.current;
          const { country, region } = data.location;
          const { wind_dir } = data.current;
          const WEATHER_API_KEY = config.apikey;
          console.log(WEATHER_API_KEY)
          // set DOM Element from the API
          temperatureDegree.textContent = temperature;
          weatherDescriptions.textContent = weather_descriptions;
          locationTimezone.textContent = region, country;

          // Formula for celsius
          let celsius = (temperature - 32) * (5 / 9);

          wind.textContent = wind_dir;

          // Change temperature to Celsius/Farenheit
          temperatureSection.addEventListener('click', function () {
            if (temperatureSpan.textContent == "F") {
              temperatureSpan.textContent = "C";
              temperatureDegree.textContent = Math.floor(celsius);
            } else {
              temperatureSpan.textContent = "F";
              temperatureDegree.textContent = temperature;
            }
          });



        });
    });
  }
});
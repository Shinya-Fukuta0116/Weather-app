window.addEventListener('load', () => {
  let long;
  let lat;
  let temperatureFeel = document.querySelector('.temperature-feel');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimezone = document.querySelector('.location-timezone');


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
          console.log(data);
          const { temperature, feelslike } = data.current;
          const { country, region } = data.location;
          const WEATHER_API_KEY = config.apikey;
          console.log(WEATHER_API_KEY)
          // set DOM Element from the API
          temperatureDegree.textContent = temperature;
          temperatureFeel.textContent = feelslike;
          locationTimezone.textContent = region, country;

        });
    });

  } else {
    h1.textContent = "Hey dis is not working because reasons"
  }
});
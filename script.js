$(document).ready(function () { //ensures document is fully loaded and parsed before running code inside the function
  const apiKey = "4f2feff2957aa3c528f135007d7bca53"; // API Key
  const apiUrl = 'https://api.openweathermap.org/data/2.5/'; // api end point url

  // need a function to fetch the weather data from the OpenWeather API
  function getWeather(location) {
    const currentWeatherUrl = `${apiUrl}weather?q=${location}&appid=${apiKey}&units=metric`;
    const forecastedWeatherUrl = `${apiUrl}forecast?q=${location}&appid=${apiKey}&units=metric`;

    // need to fetch the current weather data
    fetch(currentWeatherUrl)
      .then(response => response.json()) // parse the response from fetch request as JSON
      .then(data => { 
        displayCurrentWeather(data); // function displayCurrentWeather is called passing the fetched weather data to it.
      })
      .catch(error => console.error('Error fetching current weather', error)); // this handles any error that happens during the fetch and logs an eror to the console

    // need to fetch the data for the next 5 days of forecast
    fetch(forecastedWeatherUrl)
      .then(response => response.json()) 
      .then(data => { 
        displayForecastedWeather(data); 
      })
      .catch(error => console.error('Error fetching forecasted weather', error));
    }

  // need a function to display the current data
  function displayCurrentWeather(data) {
    const todaySection = document.getElementById('today');
    todaySection.innerHTML = `<h2>${data.name}, ${data.sys.country}</h2>
                              <p>Temperature: ${data.main.temp} °C</p>
                              <p>Wind: ${data.wind.speed} KPH</p>
                              <p>Humidity: ${data.main.humidity} %</p>`; // displays the name of the city, the country, temperature, wind speed and humidity.
  }

  // need a function to display the forecasted data
  function displayForecastedWeather(data) {

    const forecastedSection = document.getElementById('forecast');
    forecastedSection.innerHTML = ''; // clears the previous data

    for (let i = 0; i < data.list.length; i++) {
      const forecastItem = data.list[i];
      const date = dayjs(forecastItem.dt_txt).format('YYYY-MM-DD HH:mm:ss');
      const temperature = forecastItem.main.temp; // creates a variable to use later for data to be shown in forecasted section
      const windSpeed = forecastItem.wind.speed;
      const humidity = forecastItem.main.humidity;

      forecastedSection.innerHTML += `<div class="col-md-2">
                                      <p>Date: ${date}</p>
                                      <p>Temperature: ${temperature} °C</p>
                                      <p>Wind: ${windSpeed} KPH</p>
                                      <p>Humidity: ${humidity} %</p>
                                      </div>`;
    }  
  }


  // need an event listener for the form submission
  // need to add each city searched to a list which represents the history of searched cities
});

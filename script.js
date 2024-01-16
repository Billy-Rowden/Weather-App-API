$(document).ready(function () { //ensures document is fully loaded and parsed before running code inside the function
  const apiKey = "4f2feff2957aa3c528f135007d7bca53"; // API Key
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4f2feff2957aa3c528f135007d7bca53'; // api end point url

  // need a function to fetch the weather data from the OpenWeather API
  function getWeather(location) {
    const currentWeatherUrl = `${apiUrl}weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastedUrl = `${apiUrl}forecast?q=${city}&appid=${apiKey}&units=metric`;
    // need to fetch the current weather data
    fetch(currentWeatherUrl)

    // need to fetch the data for the next 5 days of forecast
    fetch(forecastedUrl)
      
    }

  // need a function to display the current data
  function displayCurrentWeather(data) {
    
  }
  // need a function to display the forecasted data
  function displayForecasted(data) {

  }
  // need an event listener for the form submission
  // need to add each city searched to a list which represents the history of searched cities
})

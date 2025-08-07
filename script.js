function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "a3430c5c40eb06be8c438ed22e9b43a8"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then(data => {
        const weather = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
          <p><strong>Weather:</strong> ${data.weather[0].description}</p>
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        `;
        document.getElementById("weatherResult").innerHTML = weather;
      })
      .catch(error => {
        document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
      });
  }
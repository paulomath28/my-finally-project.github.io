const apiKey = 'dc0af233151c6eac43d3f32c0f160699'; 
  const city = 'Rio de Janeiro';
  const units = 'metric';
  const lang = 'en';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&lang=${lang}&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp.toFixed(1);
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;

      document.getElementById("weather").innerHTML = `
        <img src="${iconUrl}" alt="${description}">
        <p>${temp}°C - ${description}</p>
      `;
    })
    .catch(error => {
      console.error("Error fetching weather:", error);
      document.getElementById("weather").innerHTML = `<p>Unable to load weather.</p>`;
    });

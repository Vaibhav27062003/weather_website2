const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dc9d22d69bmsh45ddda5a2bd2be2p1e131ajsnd6e8ebaea04c',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    const cityName = document.getElementById('cityName');
    cityName.innerHTML = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            document.getElementById('temp').innerHTML = response.temp;
			document.getElementById('temp2').innerHTML = response.temp;
            document.getElementById('feels_like').innerHTML = response.feels_like;
            document.getElementById('humidity').innerHTML = response.humidity;
			document.getElementById('humidity2').innerHTML = response.humidity;
            document.getElementById('min_temp').innerHTML = response.min_temp;
            document.getElementById('max_temp').innerHTML = response.max_temp;
            document.getElementById('wind_speed').innerHTML = response.wind_speed;
			document.getElementById('wind_speed2').innerHTML = response.wind_speed;
            document.getElementById('wind_degrees').innerHTML = response.wind_degrees;
            document.getElementById('sunrise').innerHTML = response.sunrise;
            document.getElementById('sunset').innerHTML = response.sunset;
        })
        .catch(err => console.error(err));
};

const submit = document.getElementById('submit');
const city = document.getElementById('city');

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

// Call getWeather function initially for "Delhi"


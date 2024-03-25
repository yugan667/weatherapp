const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};




const getWeather = (city) => {
      cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())

		.then(response => {
			console.log(response)

		
			temp.innerHTML = response.temp
			temp1.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
			humidity1.innerHTML = response.humidity
			wind_speed1.innerHTML = response.wind_speed
		
		}).catch(err => console.error(err));



}

let submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value);
})

getWeather("Pune");
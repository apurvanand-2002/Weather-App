
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e075ff4b60msh0b38c7fb283bcd4p1ed3f1jsn90df0c885da5',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err))
}

submit.addEventListener("click", (e) => {
    e.preventDefault()//to prevent reloading of the webpage
    getWeather(city.value)
})

getWeather("Delhi");

const getWeather2 = (ciity) => {
    cityName2.innerHTML = ciity
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + ciity, options)
        .then(response2 => response2.json())
        .then((response2) => {
            console.log(response2)
            tempB.innerHTML = response2.temp
            feels_likeB.innerHTML = response2.feels_like
            humidityB.innerHTML = response2.humidity
            min_tempB.innerHTML = response2.min_temp
            max_tempB.innerHTML = response2.max_temp
            wind_speedB.innerHTML = response2.wind_speed
            wind_degreesB.innerHTML = response2.wind_degrees
            sunriseB.innerHTML = response2.sunrise
            sunsetB.innerHTML = response2.sunset
        })
        .catch(err => console.error(err))
}
getWeather2("Bhiwadi");

const getWeather3 = (ciiity) => {
    cityName3.innerHTML = ciiity
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + ciiity, options)
        .then(response3 => response3.json())
        .then((response3) => {
            console.log(response3)
            tempC.innerHTML = response3.temp
            feels_likeC.innerHTML = response3.feels_like
            humidityC.innerHTML = response3.humidity
            min_tempC.innerHTML = response3.min_temp
            max_tempC.innerHTML = response3.max_temp
            wind_speedC.innerHTML = response3.wind_speed
            wind_degreesC.innerHTML = response3.wind_degrees
            sunriseC.innerHTML = response3.sunrise
            sunsetC.innerHTML = response3.sunset
        })
        .catch(err => console.error(err))
}
getWeather3("Jaipur");

const getWeather4 = (ciiiity) => {
    cityName4.innerHTML = ciiiity
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + ciiiity, options)
        .then(response4 => response4.json())
        .then((response4) => {
            console.log(response4)
            tempD.innerHTML = response4.temp
            feels_likeD.innerHTML = response4.feels_like
            humidityD.innerHTML = response4.humidity
            min_tempD.innerHTML = response4.min_temp
            max_tempD.innerHTML = response4.max_temp
            wind_speedD.innerHTML = response4.wind_speed
            wind_degreesD.innerHTML = response4.wind_degrees
            sunriseD.innerHTML = response4.sunrise
            sunsetD.innerHTML = response4.sunset
        })
        .catch(err => console.error(err))
}
getWeather4("Silchar");

const getWeather5 = (ciiiiity) => {
    cityName5.innerHTML = ciiiiity
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + ciiiiity, options)
        .then(response5 => response5.json())
        .then((response5) => {
            console.log(response5)
            tempE.innerHTML = response5.temp
            feels_likeE.innerHTML = response5.feels_like
            humidityE.innerHTML = response5.humidity
            min_tempE.innerHTML = response5.min_temp
            max_tempE.innerHTML = response5.max_temp
            wind_speedE.innerHTML = response5.wind_speed
            wind_degreesE.innerHTML = response5.wind_degrees
            sunriseE.innerHTML = response5.sunrise
            sunsetE.innerHTML = response5.sunset
        })
        .catch(err => console.error(err))
}
getWeather5("Darbhanga");
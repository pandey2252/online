

function get() {
   const city = document.getElementById('search').value;
   const apiKey = '323088dc2dbf653521c4ff6098cea3db';
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

   fetch(url)
   .then(response => response.json())
   .then(data => {

        document.getElementById("cityname").innerHTML = city.toUpperCase();
        let a = 272.15;
        let maintemp = data.main.temp -a ;

        document.getElementById("temp").innerHTML =  parseFloat(maintemp.toFixed(1)) + "&deg;C."

       console.log(data.main.humidity)

       console.log(data.main.Visibility)

let description = (data.weather[0].description)

console.log(description)


/// wind speed
const windSpeed = data.wind.speed;
document.getElementById("windspeed").innerHTML = windSpeed + "km"

// humedity
const humidity = data.main.humidity;

document.getElementById("humedity").innerHTML = humidity + "%"

   })
   .catch(error => console.log(error));
}


//get weather report



//show weather report
    


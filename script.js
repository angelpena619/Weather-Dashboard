var apiKey = "939af84008825816b09df6ace4af573b"

var searchBtn = document.getElementById ("search-button");
searchBtn.addEventListener("click", handleSearch)

function weatherData(lat,lon,city){
    console.log("click")
    
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&appid='+apiKey)
  .then(function(response)  {
      return response.json()
     })
  .then(function(data){

  
    console.log(data)
   $('#temperature').innerHTML = data.current.temp
   $('#wind-speed').text = data.current.wind_speed
   $('#uv-index').text = data.current.uvi
   $('#humidity').text = data.current.humidity

   
  }); 
}


function handleSearch(){
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&appid=939af84008825816b09df6ace4af573b`,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    let lat = response.coord.lat;
    let lon = response.coord.lon;
    let city = "seattle";
    weatherData(lat, lon, city);
  })
}

var apiKey = "939af84008825816b09df6ace4af573b"

var searchBtn = document.getElementById ("search-button");
searchBtn.addEventListener("click", handleSearch)

function weatherData(lat, lon,city){
    console.log("click")
    
    fetch('https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat='+lat+'&lon='+lon+'&appid='+apiKey)
  .then(function(response)  {
      return response.json()
     })
  .then(function(data){

  
    console.log(data)

    
    
    
    var icon = document.createElement("i")
    var mainWeather = data.current.weather[0].main
    icon.className = pickWeather(mainWeather) 

    
    console.log(mainWeather)


    $("#weather-icon").empty().append(icon)


  
    $('#temperature').text(data.current.temp)
    $('#wind-speed').text(data.current.wind_speed)
    $('#uv-index').text(data.current.uvi)
    $('#humidity').text(data.current.humidity + "%")

    $('#futureHumidity0').text(data.daily[0].humidity + "%")
    $('#futureTemp0').text(data.daily[0].temp.day)

    $('#futureHumidity1').text(data.daily[1].humidity + "%")
    $('#futureTemp1').text(data.daily[1].temp.day)



    $('#futureHumidity2').text(data.daily[2].humidity + "%")
    $('#futureTemp2').text(data.daily[2].temp.day)

    $('#futureHumidity3').text(data.daily[3].humidity + "%")
    $('#futureTemp3').text(data.daily[3].temp.day)

    $('#futureHumidity4').text(data.daily[4].humidity + "%")
    $('#futureTemp4').text(data.daily[4].temp.day)

    var test = document.createElement("li")
    test.className = ("search-history")
    test.innerHTML=city
    $('#history').append(test)
  
  }); 
}

$('#clear-history').on('click',clearHistory)
function clearHistory(){
  $("#history").empty()
  

}


function pickWeather (weather) {
  if (weather === "Clouds") {
      return "fas fa-cloud"
  }

  if (weather === "Clear") {
    return "fas fa-sun"
  }
  return "fas fa-question"


}

function handleSearch(){
  const city = $('#search-city').val()
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=939af84008825816b09df6ace4af573b`,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    let lat = response.coord.lat;
    let lon = response.coord.lon;
    //let city = "seattle";
    weatherData(lat, lon, city);
  })
}

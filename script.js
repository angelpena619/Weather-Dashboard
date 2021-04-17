var apiKey = "939af84008825816b09df6ace4af573b"

var searchBtn = document.getElementById ("search-button");
searchBtn.addEventListener("click", handleSearch)


    //below is the request to fetch api url for latittude and longitude when user submits city name
function weatherData(lat, lon,city,){
    console.log("click")
    
    fetch('https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat='+lat+'&lon='+lon+'&appid='+apiKey)
  .then(function(response)  {
      return response.json()
     })
  .then(function(data){

  
    console.log(data)

    
    
    
    //var icon = document.createElement("i")
   // var mainWeather = data.current.weather[0].main
   // icon.className = pickWeather(mainWeather) 

    
    //console.log(mainWeather)


    //$("#weather-icon").empty().append(icon)


    //var city = document.querySelector("#search-city")
    //console.log("city.value: ", city)

    //using jquery we are updating real time data to appear dynamically below is for main weather container
    $('#current-city').text(city)
    $('#temperature').text(data.current.temp)
    $('#wind-speed').text(data.current.wind_speed)
    $('#uv-index').text(data.current.uvi)
    $('#humidity').text(data.current.humidity + "%")
    console.log({data})


    
    //using jquery we are updating real time data to appear dynamically below is for 5 day forcast
    $('#futureHumidity0').text(data.daily[0].humidity + "%")
    $('#futureTemp0').text(data.daily[0].temp.day)

    //below is my attempt to display icons, I ran out of time, but im sure there is a better way to accomplish this. 


    //var futureIcon0 = document.createElement("i")
    //var futureWeather0 = data.daily[0].weather[0].main
    // futureIcon0.className = pickWeather(futureWeather0) 
    $('#futureIcon0').empty().append(futureIcon0)
    $('#futureHumidity1').text(data.daily[1].humidity + "%")
    $('#futureTemp1').text(data.daily[1].temp.day)

    $('#futureHumidity2').text(data.daily[2].humidity + "%")
    $('#futureTemp2').text(data.daily[2].temp.day)

    $('#futureHumidity3').text(data.daily[3].humidity + "%")
    $('#futureTemp3').text(data.daily[3].temp.day)

    $('#futureHumidity4').text(data.daily[4].humidity + "%")
    $('#futureTemp4').text(data.daily[4].temp.day)

   //below I created a listed Item dynamically to list users previous searches

    var test = document.createElement("li")
    test.className = ("search-history")
    test.innerHTML=city
    $('#history').append(test)
  
  }); 
}
//usuing jquery to empty user history and clear appending elements 
$('#clear-history').on('click',clearHistory)
function clearHistory(){
  $("#history").empty()
  

}

// below is continued attempt to append icons from a third party api, 

/*function pickWeather (weather) {
  if (weather === "Clouds") {
      return "fas fa-cloud"
  }

  if (weather === "Clear") {
    return "fas fa-sun"
  }
  if (weather === "Clear") {
    return "fas fa-sun"
  }
  return "fas fa-question"


}*/


// this function is for handling user search by city
function handleSearch(){
  const city = $('#search-city').val()
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=939af84008825816b09df6ace4af573b`,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    let lat = response.coord.lat;
    let lon = response.coord.lon;
    let city = response.name;
    console.log(city)
    weatherData(lat, lon, city);
  })
}

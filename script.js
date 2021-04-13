var apiKey = "939af84008825816b09df6ace4af573b"

var searchBtn = document.getElementById ("search-button");
searchBtn.addEventListener("click", handleSearch)
function handleSearch(){
    console.log("click")
    var lat = 32.733
    var lon = -117.246
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&appid='+apiKey)
  .then(function(response)  {
      return response.json()
     })
  .then(data => console.log(data));
}




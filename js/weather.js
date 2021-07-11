const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "b3ccc7226551220576a14dd62a334905";

function ok(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response)=>response.json()).then((data) => {city.innerText= data.name; weather.innerText = `${data.weather[0].main}/${Math.round(data.main.temp)}`;});
}
function error(){
    alert("We cannot found where you are living")
}

navigator.geolocation.getCurrentPosition(ok,error);
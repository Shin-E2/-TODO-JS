//나의 api : 0fc893011dce38ae890b6a1fe7d453f3
const weather = document.querySelector('#weather span:first-child');
const city = document.querySelector('#weather span:last-child');

const API_KEY = '0fc893011dce38ae890b6a1fe7d453f3';

function onGeoOk(position) {
 const lat = position.coords.latitude; //위도
 const lng = position.coords.longitude; //경도
 console.log('You live in', lat, lng);
 //&units=metric : 화씨 온도를 섭씨온도로
 const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
 fetch(url)
  .then((response) => response.json())
  .then((data) => {
   city.innerText = data.name;
   weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}

function onGeoError() {
 alert('cant find you. No weater for you.');
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

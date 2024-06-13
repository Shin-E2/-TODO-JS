const clock = document.querySelector('h2#clock');

//clock.innerText = 'this is a clock !';

//interval: 매번 무언가가 일어나는 것
//setInterval(실행할 함수, 몇초)
function getClock() {
 const date = new Date();
 const hours = String(date.getHours()).padStart(2, '0');
 const minutes = String(date.getMinutes()).padStart(2, '0');
 const seconds = String(date.getSeconds()).padStart(2, '0');
 clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); //즉시 html로 실행해서 사용자에게 보여줌
setInterval(getClock, 1000); //그 뒤에 1초마다 함수 호출

//padStart(만들려고 하는 자리수, 해당 자리수가 아닐 경우 앞부분에 어떤 숫자를 삽입할것인지);
//padEnd(만들려고 하는 자리수, 해당 자리수가 아닐 경우 뒷부분에 어떤 숫자를 삽입할것인지);

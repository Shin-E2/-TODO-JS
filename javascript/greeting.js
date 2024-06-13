const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const logoutSubmit = document.querySelector('.logout');

//string만 포함된 변수, string을 저장하고 싶을 때 대분자로 표기한다
//중요한 정보가 아닐 떄, hidden이 많이 사용 될 때
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

//로그인
function onLoginSubmit(event) {
 event.preventDefault();
 loginForm.classList.add(HIDDEN_CLASSNAME);
 const username = loginInput.value; //사용자가 입력차에 입력하는 string
 //↑여기까지가 로그인 시 입력 form 사라지게 만들기
 localStorage.setItem(USERNAME_KEY, username); //username 저장하기
 paintGreetings(username);
}

//로그인 후 환영인사
function paintGreetings(username) {
 greeting.innerText = `안녕하세요! ${username}, 만나서 반가워요🤭`;
 greeting.classList.remove(HIDDEN_CLASSNAME);
 logoutSubmit.classList.remove(HIDDEN_CLASSNAME); //숨겨진 logout 나타내기
 logoutSubmit.addEventListener('submit', onLogoutSubmit);
}

//로그아웃
function onLogoutSubmit(event) {
 event.preventDefault();
 localStorage.removeItem(savedUsername);
 logoutSubmit.classList.add(HIDDEN_CLASSNAME);
 greeting.classList.add(HIDDEN_CLASSNAME);
 loginForm.classList.remove(HIDDEN_CLASSNAME);
 loginForm.addEventListener('submit', onLoginSubmit);
}

//가장 먼저 실행. 로그인 하면서 저장된 username 불러오기
const savedUsername = localStorage.getItem(USERNAME_KEY);

//localstorage에 username이 없을 경우
if (savedUsername === null) {
 //show the form
 loginForm.classList.remove(HIDDEN_CLASSNAME);
 loginForm.addEventListener('submit', onLoginSubmit);
} else {
 // show the greeting
 paintGreetings(savedUsername);
}

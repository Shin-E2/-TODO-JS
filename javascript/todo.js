const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input'); //input에 적은 값 선택
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';
//localstorage에 array로 업데이트 하면서 저장
let toDos = []; //const x !! value가 계속 기존 데이터에서 업데이트 되어야 하기 때문에 let 사용

function saveToDos() {
 //그냥 toDos라고 쓰면 text형태로 저장됨
 //하지만 배열형태의 string로 저장하고 싶다면 JSON.stringify()를 사용한다
 //그리고 내가 진짜 배열로 값을 찾아서 하고 싶다 하면 JSON.parse()를 사용한다
 localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
 //삭제 눌러진 html elemnet === target
 //parentElement : 클릭된 element의 부모
 //확인하는 법 : console.dir(event.target.parentElement);
 const li = event.target.parentElement;
 //클릭했던 li.id와 다른 toDo는 남겨둔다
 li.remove();
 toDos = toDos.filter((toDO) => toDO.id !== parseInt(li.id)); //li.id는 string이고 toDO.id는 number, 따라서 li.id를 number로 바꿔야한다. 이때 parseInt()를 사용하여 문자열을 숫자로 변환해준다
 saveToDos();
}

//화면에 나타나는 todolist
function paintToDO(writedTodo) {
 const li = document.createElement('li');
 li.id = writedTodo.id; //object에 있는 id를 html li에 넣는다
 const span = document.createElement('span');
 span.innerText = writedTodo.text;
 const button = document.createElement('button'); //삭제 버튼 만들기
 button.innerText = '❌';
 button.addEventListener('click', deleteToDo);
 li.appendChild(span); //li > span 이렇게 해달라, append()도 가능함
 li.appendChild(button);
 toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
 event.preventDefault();
 const newTodo = toDoInput.value; //input의 현재 value를 새로운 변수 newTodo에 복사
 toDoInput.value = ''; //todo 입력창 비우기
 //toDos array를 객체로 바꿔서 저장하기
 const newTodoObj = {
  text: newTodo,
  id: Date.now(), //랜덤으로 id값 주기
 };
 toDos.push(newTodoObj); //빈array였던 toDos array에 push한다.
 paintToDO(newTodoObj);
 saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

/* function sayHello(item) {
 console.log('this is a turn of item', item);
} */

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
 //saveToDos에 저장된게 있다면
 const parsedToDos = JSON.parse(savedToDos); //저장된 값을 array 바꿔준다
 toDos = parsedToDos; //바꿔준 array를 toDos array에 복원
 parsedToDos.forEach(paintToDO); //forEach는 array의 각 item에 대해 function을 실행하게 해준다
}

/**⭐parsedToDos.forEach(paintToDO)
 * forEach함수는 paintToDo를 parsedToDos 배열의 요소마다 실행
 * forEach함수는 paintToDo를 기본적으로 실행한다
 * forEach는 각각의 item을 준다, 이젠 item이 object가 된다
 */

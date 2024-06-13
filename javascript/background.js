const images = ['01.png', '02.png', '03.jpg']; //img폴더 이미지 이름과 같게 적어주기

const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

//html에서 랜덤으로 배경화면을 작성하는 코드를 쓸 수 없기에 먼저 javascript에서 img태그를 생성
const bgImage = document.createElement('img');
//src 경로에 랜덤으로 이미지를 호출하게 작성하기
bgImage.src = `img/${chosenImage}`;

//console.log(bgImage);

//appendChild() : body에 html를 추가 하겠어
//함수 안의 경로에 정의한 값을 가장 뒤에서 기입함
//prepend() :  반대로 앞에서 기입
document.body.appendChild(bgImage);

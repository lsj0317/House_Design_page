function createSnow() { // createSnow라는 이름을 가진 함수를 만듦
    const el = document.createElement("div"); // 변수 el에 document.createElement 매서드로 div(createSnow())태그를 하나만들기
    el.classList.add('snow'); // 변수 el을 classList.add: 객체에 add매서드를 사용해서 ('snow')라는 클래스를 적용하기
    el.style.marginLeft = randomPosition() + 'px';
    // 눈이 하나 생성될 때: el태그를 만들고, 눈 간격띄우기 : marginLeft 값을 줄때 randomPosition 값을 적용하면 서로 다른 위치에서 눈이 내리게 된다
    document.body.appendChild(el); // document.body요소에 자식요소로써 하나 추가하기 --> 함수만들기
}

function randomPosition() { // randomPosition 이라는 함수를 만들기
    return Math.floor(Math.random() * window.innerWidth);
    // return: 반환, Math: 숫자,  random: 무작위, floor: 나누기
    // random 값의 수치는 window.innerWidth: 브라우저의 너비를 넘어가지 않도록 지정
    // 브라우저의 넓이 안에서 랜덤한 숫자가 나올 수 있도록 지정
}

for (let i = 0; i < 300; i++) { // 반복문(for)으로 눈을 여러개 내리게 지정
    // 변수 i에 0이라는 값을 대입, 변수 i가 300보다 작으면 변수 i를 1씩 증가해시켜라
    createSnow(); // 눈을 한개 생성
}

// createSnow(); --> 눈 한개 생성



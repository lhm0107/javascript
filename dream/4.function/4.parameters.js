//매개변수의 기본값은 무조건 undefined
//매개 변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
//매개변수 기본값(Default Parameters)을 설정해 줄 수 있는데  a=1 , b=2 와같은 방법으로 작성한다.
function add(a = 1, b = 1) {
	console.log(a);
	console.log(b);
	console.log(arguments);
	return a + b;
}

add();
//Rest 매개 변수 Rest Parameters 인자의 숫자를 모를 경우 배열형태로 받을 수 있다.
function sum(...numbers) {
	console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7);

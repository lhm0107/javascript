print();
//함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해주기때문에
//함수의 선언문은 이전에도 호출이 가능하다.
function print() {
	console.log('hello');
}

//변수 (let, const)와 클래스는 선언만 호이스팅이되고,
//초기화는 되지 않는다.
// 초기화전 , 변수에 접근하면 컴파일(빌드) 에러가 발생
// console.log(hi);
let hi = 'hi';

let func1 = function () {};

// const cat = new Cat();
class Cat {}

let x = 1;
{
	// 변수가 아래쪽에서 hoisting되었지만 값은 초기화 되지 않아 에러가 발생된다.
	console.log(x);
	let x = 2;
}

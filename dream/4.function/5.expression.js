//함수 선언문 function name ( ) {}
//함수 표현식 const name = function () {}

let add = function (a, b) {
	return a + b;
};

console.log(add(1, 3));

// 화살표 함수  const name = () => {}
add = (a, b) => a + b;
console.log(add(2, 5));

//생성자 함수 object에 사용되는 함수

//IIFE  Immedicately-Invoked Function Expressions 즉시실행함수 표현
(function run() {
	console.log('Immedicately-Invoked Function Expressions');
})();

//엄격모드 strict mode
//리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임
'use strict';
var x = 1;
console.log(x);
// delete x;

function add(x) {
	var a = 2;
	var b = a + x;
	console.log(this);
}

const array = [1, 2, 3];
for (const num of array) {
	// 비엄격모드 (sloppy mode)에서는 const 생략해도 에러발생하지 않는다.
	console.log(num);
}

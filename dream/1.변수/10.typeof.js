//typeof : 데이터 타입을 확인
// 값을 타입 문자열로 반환해준다.
// 타입을 가지고 있으나 동적으로 타입이 변경된다. 할당되는 값에 따라 그타입도 달라진다.
let variable;
console.log(typeof variable);
variable = '';
console.log(typeof variable);
variable = 0;
console.log(typeof variable);
variable = {};
console.log(typeof variable);
variable = function () {};
console.log(typeof variable);
variable = Symbol();
console.log(typeof variable);

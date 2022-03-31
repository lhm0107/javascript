//동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// ===  값과 타입이 같음
// !== 값과 타입이 다름

console.log(2 == 2);
console.log(2 != 2);
console.log(2 == 3);
console.log(2 != 3);
console.log(2 === '2');
console.log(2 !== '2');

const obj1 = {
	name: 'js',
};
const obj2 = {
	name: 'js',
};

console.log(obj1 == obj2);
console.log(obj1 === obj2);
// obj1와 obj2는 서로 다른 메모리주소를 가지고 있기 때문에 거짓이다.
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);
// obj1와 obj2의 name값은  같은 메모리 주소를 서로 다른 메모리주소를 가지고 있지 않지만
// 그 값과 타입이 같기때문에 참이다.
let obj3 = obj2;
console.log(obj2 == obj3);
console.log(obj2 === obj3);
// obj3와 obj2는 같은 메모리 주소를 공유하고있기때문에 참이다.

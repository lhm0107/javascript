function add(a, b) {
	return a + b;
}

const sum = add;

console.log(sum(1, 2));
console.log(add(1, 2));
//sum과 add 는 같은 함수의 메모리 주소를 가지고있어서 동일한 함수를 공유한다 !!!.
// sum과 add는 서로다른 메모리에 동일한 함수의 주소를 가지고있다 !!!

//Iterable 순회가 가능하다는 뜻
//[Symbol.iterator]():IterableIteratoer<T>;
//심볼정의를 가진 객체나, 특정한 함수가 IterableIteratoer<T>(반복자 계체)를 리턴한다는 것은 순회 가능한 객체라는 것을 의민한다.
// 순회가 가능하다면 무슨의미인가???
// 바로 반복문 ,연산자를 사용 할 수 있다.는 의미 !!! (for of , for in  을 사용할 수있다.)
const array = [1, 2, 3];
console.log(array.values());
console.log(array.entries());
console.log(array.keys());

// iterable 사용해보기
for (let item of array.values()) {
	console.log(item);
}

const iterator = array.values();
while (true) {
	const item = iterator.next();
	if (item.done) break;
	console.log(item.value);
}

const obj = { id: 123, name: 'abc' }; // in을 사용하면 key 값을 받아 올 수 있다.
for (const abc in obj) {
	console.log(abc);
}

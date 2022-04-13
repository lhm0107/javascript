// set
const set = new Set([1, 2, 3]);
console.log(set);

console.log(set.size);

console.log(set.has(2));
console.log(set.has(5));

set.forEach((item) => console.log(item));
for (const value of set.values()) {
	console.log(value);
}

//추가
set.add(6);
console.log(set);
set.add(6); // 중복 되지 않는다.
console.log(set);

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set);

// 오브젝트 세트
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍓', price: 4 };
const obj = new Set([obj1, obj2]);
console.log(obj);

// 퀴즈
obj1.price = 10;
obj.add(obj1); // 새롭게 obj가 추가되는것이 아니라 가격만 변경된다.
console.log(obj);

const obj3 = { name: '🍓', price: 4 };
obj.add(obj3);
console.log(obj); // obj2와 obj3는 값은 같지만 다른 메모리에 저장되어있는 객체이므로 별도로 추가가된다.

obj3.price = 7;
console.log(obj);

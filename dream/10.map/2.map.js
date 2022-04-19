//Map
const map = new Map([
	['key1', '🍎'],
	['key2', '🍌'],
]); //순서 상관 없이 키와 값을 가지고 있다.
//키는 고유이름을 가지고있어야하며 , 값은 중복 되어도 상관 없다.

console.log(map);

// 사이즈
console.log(map.size);
//존재하는지 확인 (키값 확인)
console.log(map.has('key1'));
console.log(map.has('key6'));
//순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
//찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4'));
//추가
map.set('key3', '🥝');
console.log(map);

//삭제
map.delete('key3');
console.log(map);
map.clear(); // 전부 삭제
console.log(map);
// 오브젝트와의 차이점
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는 우유' };
const obj = {
	[key]: milk,
};
console.log(obj);

const map2 = new Map([[key, milk]]);
console.log(map2);
// 사용 할 수 있는 함수가 다르다.

console.log(obj[key]);
console.log(map2.get(key));
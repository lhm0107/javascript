//Symbol 심볼
//유일한 키를 생성 할 수 있음
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
const key1 = Symbol('key');
const key2 = Symbol('key');
map.set(key1, 'Hello');
console.log(key1 === key2);
console.log(map.get(key2)); // key2를 추가하지 않았지만 실제 키값은 'key'로 같기때문에 출력된다.
// 변수가 다르긴하지만 값이 원시타입이기 때문에 동일하게 'hello' 가 출력된다.

// 동일한 이름으로 하나의 키를 사용하고 싶다면 Symbol.for()
// 전역 심벌 레지스트리
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2);

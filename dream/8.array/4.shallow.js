const pizza = { name: '🍕', price: 2 };
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);

console.log('store1', store1);
console.log('stoer2', store2);

store2.push(sushi);

console.log('store1', store1);
console.log('stoer2', store2);

pizza.price = 4; // shallow copy  얕은 복사 객체는 메모리 주소가 전달 되기 때문에
//자바스크립트에서 복사 할 때는 항상 얕은 복사가 이루어짐 !!
//Array.from, concat , slice, spread(...), Object.assign  같은 객체의 메모리 주소를 공유
console.log('store1', store1);
console.log('stoer2', store2);

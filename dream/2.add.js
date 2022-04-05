const fruits = ['🍌', '🍎', '🍇', '🍑'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

// 추가 삭제시 좋지 않은 방식
fruits[6] = '🍓'; // 2개의 빈공간이 생기기때문
console.log(fruits);

delete fruits[1]; // 지워진 빈공간이 생기기때문
console.log(fruits);

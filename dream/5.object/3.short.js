const x = 0;
const y = 0;

const coordinate = { x: x, y: y };
console.log(coordinate);

const coordinate1 = { x, y };
console.log(coordinate1); // 키이름과 변수의 이름이 같다면 생략 가능

function makeObj(name, age) {
	return {
		name,
		age,
	};
}

console.log(makeObj('kim', 20));

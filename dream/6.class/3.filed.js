//접근제어자
class Fruit {
	#name;
	#emoji;
	type = '과일';
	constructor(name, emoji) {
		this.#name = name;
		this.#emoji = emoji;
	}
	display = () => {
		console.log(`${this.#name}: ${this.#emoji}`);
	};
}
const apple = new Fruit('apple', '🍎');
//#filed 는 class내부에서만 사용 할 수 있다 외부에서 데이터 사용 불가
console.log(apple);

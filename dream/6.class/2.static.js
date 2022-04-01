//static 정적 프로퍼티 , 메서드
class Fruit {
	static MAX_FRUITS = 4;
	//생성자 : new 키워드로 객체를 생성할때 호출되는 함수
	constructor(name, emoji) {
		this.name = name;
		this.emoji = emoji;
	}
	//클래스 레벨의메서드
	static makeRandomFruit() {
		// 클래스 레벨의 메서드에서는 this를 참조 할 수 없음
		return new Fruit('banana', '🍌');
	}
	// 인스턴스 레벨의 메서드
	display = () => {
		console.log(`${this.name}: ${this.emoji}`);
	};
}

const banana = Fruit.makeRandomFruit();
//apple는 Fruit클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
//orange는 Fruit클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');

console.log(banana);
console.log(apple);
console.log(orange);
console.log(apple.name);
apple.display();
orange.display();

Math.pow();
Number.isFinite(1);

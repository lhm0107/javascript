//객체를 쉽게 만들수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
//2. 클래스를 사용하는 방법
//class
class Fruit {
	//생성자 : new 키워드로 객체를 생성할때 호출되는 함수
	constructor(name, emoji) {
		this.name = name;
		this.emoji = emoji;
	}

	display = () => {
		console.log(`${this.name}: ${this.emoji}`);
	};
}
//apple는 Fruit클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
//orange는 Fruit클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
apple.display();
orange.display();
// 클래스에의해서 만들어진 객체는 인스턴스라고 부른다 !!

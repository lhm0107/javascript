//프로토 타입을 베이스로한 객체지향형 프로그래밍
class Animal {
	constructor(name, emoji) {
		this.name = name;
		this.emoji = emoji;
	}
	printName() {
		console.log(`${this.name} ${this.emoji}`);
	}
}

class Dog extends Animal {
	play() {
		console.log('같이 놀자');
	}
}

class Tiger extends Dog {
	hunt() {
		console.log('사냥하자 !!!!');
	}
}

const dog1 = new Dog('멍멍이', '🐶', '엘리');
const dog2 = new Dog();
const tiger1 = new Tiger('어흥', '🐯');

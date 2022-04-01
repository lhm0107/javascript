// class Tiger {
// 	constructor(color) {
// 		this.color = color;
// 	}
// 	eat() {
// 		console.log('먹자!');
// 	}
// 	sleep() {
// 		console.log('잔다');
// 	}
// }

// class Dog {
// 	constructor(color) {
// 		this.color = color;
// 	}
// 	eat() {
// 		console.log('먹자!');
// 	}
// 	sleep() {
// 		console.log('잔다');
// 	}
// 	play() {
// 		console.log('놀자');
// 	}
// }

//공통된것이있고 추가하려는게 있다면 공통된 하나의 클래스를 작성하고 extends 후 추가하면 된다.

class Animal {
	constructor(color) {
		this.color = color;
	}
	eat() {
		console.log('먹자!');
	}
	sleep() {
		console.log('잔다');
	}
}

class Tiger extends Animal {}
const tiger = new Tiger('노란색');
console.log(tiger);
tiger.eat();

class Dog extends Animal {
	constructor(color, ownerName) {
		super(color); //super 은 부모 클래스를 가르킨다.
		this.ownerName = ownerName;
	}
	eat() {
		super.eat(); // 오버라이딩으로 동잃한 함수에 다른 내용을 출력 할 수도 있고 부모함수를 호출하고
		console.log('강아지가 먹어요.'); //내가원하는 함수를 호출 할 수 있다.
	}
	play() {
		console.log('놀자');
	}
}

const dog = new Dog('검은색', '김철수');
console.log(dog);
dog.play();
dog.eat();

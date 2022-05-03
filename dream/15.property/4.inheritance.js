//프로토 타입을 베이스로한 객체지향형 프로그래밍
function Animal(name, emoji) {
	this.name = name;
	this.emoji = emoji;
}

Animal.prototype.printName = function () {
	console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
	Animal.call(this, name, emoji);
	this.owner = owner;
}
// Dog.prototype = Object.create(Object.prototype)
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.play = () => {
	console.log('같이 노올자');
};

function Tiger(name, emoji) {
	Animal.call(this, name, emoji);
}
Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
	console.log('사냥하자');
};
const dog1 = new Dog('멍멍이', '🐶', '엘리');
const dog2 = new Dog();
const tiger1 = new Tiger('어흥', '🐯');

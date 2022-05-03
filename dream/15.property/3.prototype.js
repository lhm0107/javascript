function Dog(name, emoji) {
	this.name = name;
	this.emoji = emoji;
	//인스턴스 레벨의 함수 : 만들어진 오브젝트에 동일한 함수 생성됨 메모리 낭비
	// this.printName = () => {
	// 	console.log(`${name},${emoji}`);
	//};
}

// 프로토타입 레벨의 함수 생성
Dog.prototype.printName = function () {
	console.log(`${this.name},${this.emoji}`);
};
const dog1 = new Dog('뭉치', '🐶');
const dog2 = new Dog('코코', '🐩');
console.log(dog1, dog2);
dog1.printName();
dog2.printName();

//오버라이딩
//인스턴스 레벨에서 (자식) 동일한 이름으로 함수를 재정의 하면 (오버라이딩하면)
//프로토타입 레벨(부모)의 프로퍼티는 가려진다.(섀도잉 됨)
dog1.printName = function () {
	console.log('안녕!!');
};
dog1.printName();
console.log(dog2);

//정적 레벨
Dog.hello = () => {
	console.log('hello');
};
//dog1.hello(); 접근이 되지 않는다.
Dog.hello();
Dog.MAX_AGE = 20;
console.log(dog1);
console.log(dog2);

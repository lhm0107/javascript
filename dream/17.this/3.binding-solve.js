function Cat(name) {
	this.name = name;
	//2. arrow 함수를 사용 : arrow함수는 렉시컬 환경에서의 this를 기억한다.
	//화살표 함수 밖에서 제일 근접한 스코르의 this를 가리킴
	this.printName = () => {
		console.log(`고양이의 이름을 출력합니다. : ${this.name}`);
	};
	//1. bind 라는 함수를 사용하여 수동으로 바인딩한다.
	// this.printName = this.printName.bind(this);
}

function Dog(name) {
	this.name = name;
	this.printName = function () {
		console.log(`강아지의의 이름을 출력합니다. : ${this.name}`);
	};
}

const cat = new Cat('냐옹');
const dog = new Dog('멍멍');
cat.printName();
dog.printName();

dog.printName = cat.printName;
cat.printName();
dog.printName();

function printOnMonitor(printName) {
	console.log('모니터를 준비하고 ! 전달된 콜백을 실행!');
	printName();
}
printOnMonitor(cat.printName);

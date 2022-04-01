//카운터 만들기
//0 이상의 값으로 초기화 한두 하나씩 숫자를 증가할 수 있는 카운터 만들기
// Counter 클래스 만들기

class Counter {
	#value; //내부에서 값을 변경하기위해 필드를 정의해줌
	constructor(startValue) {
		if (isNaN(startValue) || startValue < 0) {
			this.#value = 0;
		} else {
			this.#value = startValue;
		}
	}
	get value() {
		//외부에서 value를 읽을 수만 있기 때문에 접근시 비공개 값을 리턴해주기위함
		return this.#value;
	}
	increment = () => {
		this.#value++;
	};
}

const counter = new Counter(0);
counter.increment(); //1
counter.increment(); //2
console.log(counter.value); // 현재값인 2가 출력되게 만들어라

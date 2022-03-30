//let는 재할당이 가능

let a = 1;
a = 3;

//const 는 재할당이 불가능
//1 . 상수
//2. 상수변수 또는 변수 라고 한다.

const text = 'hello';
//text = 'hi'; // 오류 발생됨

//1. 상수
const MAX_FRUITS = 5;
// 2. 재할당 불가능한 상수변수
const apple = {
	name: 'apple',
	color: 'red',
	display: ' apple image',
};
console.log(apple);
apple.name = 'orange';
console.log(apple);
// 재할당은 불가능하지만 정의된 object의 값은 변경 할 수 있다.
// const를 사용하여 apple의 메모리 주소를 재할당 할 수 없을뿐
//apple의 object는 다른 메모리에 저장 되어있기때문에 변경이 가능하다.

//논리 연산자 Logical Operator
//&& 그리고
//|| 또는
//단축 평가 : short-circuit evaluation

const obj1 = { name: '🍓' };
const obj2 = { name: '🍑', owner: 'Ellie' };

if (obj1 && obj2) {
	console.log('둘다 true');
}

if (obj1 || obj2) {
	console.log('둘다 true');
}

let result = obj1 && obj2;
console.log(result); // 조건문 밖에서 &&을 사용하게 되면 obj2가 result에 할당된다 // obj1이 참이기때문에 평가가단축됨

result = obj1 || obj2; // 조건문 밖에서 ||을 사용하게 되면 obj1가 result에 할당된다 // obj1이 참이기때문에 평가가단축됨
console.log(result);

//활용예
// 조건이 truthy일때 && 무언가 를 해야 할 경우
//조건이 falshy일때  || 무언가를 해야 할 경우

function changeOner(animal) {
	if (!animal.owner) {
		throw new Error('주인이 없어요.');
	}
	animal.owner = '바뀐주인!';
}
function makeNewOner(animal) {
	if (animal.owner) {
		throw new Error('주인이 있어요.');
	}
	animal.owner = '새로운주인';
}

obj1.owner && changeOner(obj1);
obj2.owner && changeOner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOner(obj1);
obj2.owner || makeNewOner(obj2);
console.log(obj1);
console.log(obj2);

//null 또는 undefined인경우를 확인 할때
let item; //= { price: 1 };
const price = item && item.price; //item에 값이 없다면 undefined가 출력된다. 일반적으로 item && 구문이 없다면 에러발생
console.log(price);

// ||를 사용하여 기본값을 설정해줄 수 있다
// default parameter과의 차이점은 default parameter는 null과 undefined의 경우에만 기본값이 설정(할당)되지만,
// ||의 경우 모든 falshy 한경우 (0,-0,null,undefined,'' )에 기본값이 설정(할당)된다.
function print(message) {
	const text = message || 'hello';
	console.log(text);
}

print();
print(0);
print('');

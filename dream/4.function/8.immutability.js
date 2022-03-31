function display(num) {
	num = 5;
	console.log(num);
}

const value = 4;
display(value);
console.log(value);
//함수 내부에서 외부로부터 받은 인자의 값을 변경하는것은 절대 안된다~~!!!
//상태변경이 필요할경우 복사하여 새로운 상태의 (오브젝트 , 값) 을 만든 후 변경하여 사용한다.
//원시값 - 값에의한 복사
//객체값 - 참조에의한 복사 라서 문제가 됨(동일한 메모리 주소를 가지게 되어 원래의 오프젝트 값이 변경되는 현상이 발생된다!!!!)

function displayObj(obj) {
	obj.name = 'bob';
	console.log(obj);
}
const jack = { name: 'jack' };
displayObj(jack);
console.log(jack); // 내부에서 값을 변경하였기때문에 원본값을 강제로 변경하여 name : 'bob' 가 출력된다.

function changeName(obj) {
	return { ...obj, name: 'merry' };
}
const ellie = { name: 'ellie' };
console.log(changeName(ellie)); // 데이터가 복사된 후 name가 변경되었고 새로운 데이터(오브젝트)가 생성되었다.
console.log(ellie); // 원본 데이터는 변함이 없다.

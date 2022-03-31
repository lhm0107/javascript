function add(a, b) {
	return a + b;
}
const result = add(1, 2);
console.log(result);
//return 을 명시적으로 하지 않으면 자동으로 undefined가 반환됨

//함수 중간에 return을 사용하게 되면 함수가 종료됨
//사용예 조건이 맞지안는 경우를 확인하여 함수 도입부에서 함수를 일찍 종료시킴

function show(num) {
	if (num < 0) {
		return;
	}
	console.log(num);
}
show(11);
show(-1);

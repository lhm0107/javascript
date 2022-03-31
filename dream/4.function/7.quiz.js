//주어진 숫자 만큼 0부터 순회하는 함수
//순회하면서 주어진 특정한 일을 수행해야함
// function iterate(max , action)
//5, 순회하면서 숫자를 다 출력하고 싶다.
//5, 순회하는 숫자의 두배 값을 출력하고 싶다.
const print = (a) => console.log(a);
const dubleAndLog = (a) => console.log(2 * a);

function iterate(a, action) {
	for (let i = 0; i <= a; i++) {
		action(i);
	}
}

iterate(5, print);
iterate(5, dubleAndLog);

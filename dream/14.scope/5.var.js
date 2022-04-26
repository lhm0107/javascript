//var의 특징
//1 일반 코딩 방식과 어긋나서 개발하면서 멘붕
//2. 코드의 가독성과 유지보수에 좋지 않음

//변수 선언 키워드 (let, const) 선언과 할당이 가능함
// 선언인지 재할당인지 구분이 어렵다.

something = '😒';
console.log(something);

//중복선언이 가능하다.

var poo = '😶‍🌫️';
var poo = '😶';
console.log(poo);

// 3.블록레벨 스코프 안됨
var apple = '사과';
{
	var apple = '🍎';
	{
		var apple = '🍑';
	}
}

console.log(apple);

//4.함수 레벨 스코프만 지원된다.
function example() {
	var dog = '🐶';
}

console.log(dog);

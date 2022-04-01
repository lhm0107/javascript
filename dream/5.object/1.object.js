// Object literal {key : balue}
//new Object();
//Object.create();
//key - 문자 숫자 문자열 심볼
//value - 원시값 , 객체 (함수)

let apple = {
	name: ' apple',
	'hello-bye': 'hi',
	0: 1,
	['hello-bye1']: 'say hello',
};

apple.name; // 마침표 표기법 dot notation
console.log(apple['hello-bye1']); // 대괄호 표기법 bracket notation
apple['name'];

//속성 추가
apple.emoji = '🍎';
console.log(apple.emoji);

// 속성 삭제
delete apple.emoji;
console.log(apple.emoji);

//원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a;
b = 2;
console.log(a);
console.log(b);

//객체 타입은 참조값(메모리 주소, 레퍼런스)가 복사되어 전달됨

let apple = { name: 'apple', color: 'red' };
let orange = apple;
orange.name = 'orange';

console.log(apple);
console.log(orange);

// 참조값을 공유하는개념으로 생각하면 된다. 따라서 object안의 값을 변경하면 두변수 모두 값이 변경되어 나타난다.

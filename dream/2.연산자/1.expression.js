let b; // 선언문
b = 2; //표현식 이자 할당문
// let a = let b; 잘못된 표현식 값으로 평가됨

let a = (b = 2);
console.log(a);

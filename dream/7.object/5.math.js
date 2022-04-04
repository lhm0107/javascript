//Math
//static properties, method
console.log(Math.E); //오일러의 상수 ,자연로그의 밑
console.log(Math.PI); //원주율;

//static method
//절대값 (음수를 양수로 치환)
console.log(Math.abs(-10));
//소수점이하 올림
console.log(Math.ceil(1.5));
//소수점이하를 내림
console.log(Math.floor(1.4));
//소수점이하를 반올림
console.log(Math.round(1.4));
console.log(Math.round(1.7));
//소수점 이하 버림
console.log(Math.trunc(1.524));
//최대 최소 값 찾기
console.log(Math.max(1, 2, 4));
console.log(Math.min(1, 3, 6));

//거듭제곱
console.log(3 ** 2);
console.log(Math.pow(3, 2));
//제곱근
console.log(Math.sqrt(9));

// 1~0사이의 랜덤한 값을 반환
console.log(Math.random());

// 1~ 10 사이의 랜덤한값
console.log(Math.random() * 10 + 1);
console.log(Math.round(Math.random() * 10));

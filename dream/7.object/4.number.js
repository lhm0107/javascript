const num1 = 123;
const num2 = new Number(123); //메모리낭비

console.log(num1);
console.log(num2);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if (num1 < Number.MAX_VALUE) {
}
if (Number.isNaN(num1)) {
}

const num3 = 102;
//지수표기법(매우크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
console.log(num3.toExponential());

//반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());
console.log(num4.toLocaleString('ar-EG'));

//원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); //전체 자릿수가 표기 되지 않을때는 지수표기법

console.log(Number.EPSILON); //0과 1사이에서 나타낼 수 있는 가장 작은 숫자
if (Number.EPSILON > 0 && Number.EPSILON < 1) {
	console.log(Number.EPSILON);
}

const num = 0.1 + 0.2 - 0.2;
console.log(num); // 2진수로 변환 후 계산하기 때문에 부동 소수점 까지 일 치 할 수 없다. 오차발생!!!

function isEqual(original, expected) {
	return Math.abs(original - expected) < Number.EPSILON;
	//return original === expected;
}

console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1));

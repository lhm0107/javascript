//논리 연산자 Logical operator
// &&  그리고
// ||  또는
// !  부정 (단항연산자에서 온것)
// !! 불리언값으로 변환 (단항연산자 응용버전)

let num = 21;
if (num >= 0 && num < 9) {
	console.log('맞아요.');
}

num = 8;
if (num >= 0 && num < 9) {
	console.log('맞아요.');
}

if (num >= 0 || num < 9) {
	console.log('맞아요.');
}

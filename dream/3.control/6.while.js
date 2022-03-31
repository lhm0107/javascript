//while(조건) {}
//조건이 fales될때 까지 {} 코드를 반복 실행
let num = 5;
while (num >= 0) {
	console.log(num);
	num--;
}

let isActive = true;
let i = 0;
while (isActive) {
	console.log(`i'm alive`);
	if (i === 100) {
		break;
	}
	i++;
}

do {
	console.log(`do-while i'm still alive`);
} while (false);

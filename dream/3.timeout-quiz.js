//주어진 seconds(초)가 지나면 callback함수를 호출함
//단 ,seconds(초)가 0보다 작을면 에러를 던지자

function runInDelay(callback, seconds) {
	if (!callback) {
		throw new Error('callback 함수를 입력하세요.');
	}
	if (!seconds || seconds < 0) {
		throw new Error('"seconds" 는 0보다 커야합니다');
	}
	const time = seconds * 1000;
	setTimeout(callback, time);
}

try {
	runInDelay(() => {
		console.log('성공이다.');
	}, 3);
} catch (error) {
	console.log(error.message);
}

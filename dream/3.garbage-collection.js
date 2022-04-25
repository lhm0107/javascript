// 글로벌 변수는 앱이 종료 될때까지 계속 메모리에 유지 됨
const global = 1;
{
	//블럭내부에서만 존재하고 블럭이 끝나면 자동으로 청소됨(GC)
	const local = 1;
}

function print() {
	// 함수 내부에서도 블럭안에서 필요한 경우에는
	//필요한 곳!!(블럭안)에서 변수를 선언하고 사용해야 한다
	if (true) {
		let temp = 0;
	}
}

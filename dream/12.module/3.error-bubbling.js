//Bubbling up, Propagating
function a() {
	throw new Error('error');
}

function b() {
	try {
		a();
	} catch (error) {
		console.log('생각해보니 이에러는 요기서 처리 할 수 없네요.');
		throw error;
	}
}
function c() {
	b();
}

try {
	c();
} catch (error) {
	console.log('Catched');
}
console.log('done');

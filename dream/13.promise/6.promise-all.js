function getBanana() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('🍌');
		}, 1000);
	});
}

function getApple() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('🍎');
		}, 3000);
	});
}

function getOrange() {
	return Promise.reject(new Error('no orange'));
}

getBanana()
	.then((banana) => getApple().then((apple) => [banana, apple]))
	.then(console.log);
//Promise.all 병렬적으로 한번에 모든 Promise들을 실행
Promise.all([getBanana(), getApple()]).then((fruits) => console.log('all', fruits));

//Promise.race 주어진 Promise들중 가장빨리 수행된것이 이긴다.

Promise.race([getBanana(), getApple()]).then((fruits) => console.log('race', fruits));
Promise.race([getBanana(), getApple(), getOrange()])
	.then((fruits) => console.log('all-error', fruits))
	.catch(console.log);
Promise.allSettled([getBanana(), getApple(), getOrange()])
	.then((fruits) => console.log('all-settled', fruits))
	.catch(console.log);
//

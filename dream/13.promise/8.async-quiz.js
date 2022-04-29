function fetchEgg(chicken) {
	return Promise.resolve(`${chicken}=>🥚`);
}
function fryEgg(egg) {
	return Promise.resolve(`${egg}=>🍳`);
}

function getChicken() {
	return Promise.reject(new Error('치킨을 가져올 수 없음'));
	//return Promise.resolve(`🪴=>🐔`);
}

async function makeFrideEgg() {
	let chicken;
	try {
		chicken = await getChicken();
	} catch {
		chicken = '🐔';
	}
	const egg = await fetchEgg(chicken);
	return fryEgg(egg);
}

makeFrideEgg().then(console.log);

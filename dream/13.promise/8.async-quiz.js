function fetchEgg(chicken) {
	return Promise.resolve(`${chicken}=>π₯`);
}
function fryEgg(egg) {
	return Promise.resolve(`${egg}=>π³`);
}

function getChicken() {
	return Promise.reject(new Error('μΉν¨μ κ°μ Έμ¬ μ μμ'));
	//return Promise.resolve(`πͺ΄=>π`);
}

async function makeFrideEgg() {
	let chicken;
	try {
		chicken = await getChicken();
	} catch {
		chicken = 'π';
	}
	const egg = await fetchEgg(chicken);
	return fryEgg(egg);
}

makeFrideEgg().then(console.log);

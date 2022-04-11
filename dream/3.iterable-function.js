function makeIterable(initialValue, maxValue, callback) {
	return {
		[Symbol.iterator]: () => {
			const max = maxValue;
			let num = initialValue;
			return {
				next() {
					return { value: callback(num++), done: num > max };
				},
			};
		},
	};
}

const multiple = makeIterable(0, 20, (num) => num * 2);
for (const num of multiple) {
	console.log(num);
}

const sigle = makeIterable(0, 30, (num) => num);
for (const num of sigle) {
	console.log(num);
}

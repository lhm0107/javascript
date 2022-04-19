const fruists = [1, 2, 3, 1, 2, 4];
const set = new Set(fruists);
console.log(set);

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

set2.forEach((item) => console.log(item));
console.log(set1.forEach());

// if (set1.forEach(value) === set2.forEach(value)) {
// 	return value;
// }
// const set3 = new Set();

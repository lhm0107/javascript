// 옵셔널 체이닝 연산자  Optional Chaning Operator
// ES11
// ?.
let item = { price: 1 };
const price = item?.price;
console.log(price);

let obj = { name: '🐶', owner: { name: 'elli' } };
function printName(obj) {
	const onerName = obj?.owner?.name; //obj && obj.owner && obj.owner.name;
	console.log(onerName);
}

printName(obj);

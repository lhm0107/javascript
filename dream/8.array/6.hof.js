const fruits = ['π', 'π', 'π', 'π'];
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}
// λ°°μ΄μ λλ©΄μ μνλκ²μ ν λ
fruits.forEach(function (value, index, array) {
	console.log('----------------');
	console.log(value);
	console.log(index);
	console.log(array);
});

fruits.forEach((value) => console.log(value));

//μ‘°κ±΄μ λ§λ (μ½λ°±ν¨μ) μμ΄νμ μ°Ύμλ
//find : μ μΌλ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μ°Ύμμ€
const item1 = { name: 'π₯', price: 2 };
const item2 = { name: 'πͺ', price: 3 };
const item3 = { name: 'π£', price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((value) => value.name === 'πͺ'); //μ‘°κ±΄μ΄ λ§μΌλ©΄ κ·Έμμ΄νμ νΈμΆν¨
console.log(result);

//findIndex : μ μΌλ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μΈλ±μ€κ°μ λ°ν
result = products.findIndex((value) => value.name === 'πͺ');
console.log(result);

//λ°°μ΄μ μμ΄νλ€μ΄ λΆλΆμ μΌλ‘ μ‘°κ±΄ (μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
result = products.some((value) => value.name === 'πͺ');
console.log(result);

// λ°°μ΄μ μμ΄νλ€μ΄ μ λΆ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
result = products.every((value) => value.name === 'πͺ');
console.log(result);

//μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λ λͺ¨λ  μμ΄νλ€μ μλ‘μ΄ λ°°μ΄λ‘
result = products.filter((value) => value.name === 'πͺ');
console.log(result);

//Map λ°°μ΄μ μμ΄νλ€μ κ°κ°μ λ€λ₯Έ μμ΄νμΌλ‘ λ©ν ν  μ μλ , λ³ννμ¬ μλ‘μ΄ λ°°μ΄ μμ±

const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);

result = nums.map((item) => {
	if (item % 2 === 0) {
		return item * 2;
	} else {
		return item;
	}
});

console.log(result);

//Flatmap : μ€μ²©λ λ°°μ΄μ νΌμ³μ€
result = nums.map((item) => [1, 2]);
console.log(result);
result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].map((text) => text.split(''));
console.log(result);

result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);

//sort λ°°μ΄μ μμ΄νλ€μ μ λ ¬
// λ¬Έμμ΄ ννμ μ€λ¦μ°¨μμΌλ‘ μμλ₯Ό μ λ ¬νκ³  ""κΈ°μ‘΄μ λ°°μ΄μ λ³κ²½"""
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers); // μ«μμ κ²½μ° μμ«μ κΈ°μ€μΌλ‘ μ λ ¬λκΈ°λλ¬Έμ μΆκ°μ μΈ ν¨μνμ
// < 0  aκ° μμΌλ‘ μ λ ¬ μ€λ¦μ°¨μ
// > 0 bκ° μμΌλ‘ μ λ ¬ λ΄λ¦Όμ°¨μ
numbers.sort((a, b) => a - b);
console.log(numbers);

// reduce λ°°μ΄μ μμλ€μ μ μ΄μ μ μ΄μ κ°μ νλλ‘ ??
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
//sumμ λ°°μ΄μ΄ λͺ¨λ λν΄μ§ κ°  valueλ λ°°μ΄ κ°κ°μ κ° 0= μ΄κΈ°κ° λ³κ²½ ν  μ μλ€.
console.log(result);

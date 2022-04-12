//Spread 연산자 , 전개구문
//모든 Interable은 Spread 될 수 있다.
//순회가 가은한 모든것들은 펼쳐 질 수 있다.
//func(...iterable)
//[...iterable]
//{...obj}
function add(a, b, c) {
	return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums));

//Rest parameters
function sum(first, second, ...nums) {
	console.log(nums);
}
sum(0, 1, 3, 4, 5, 6);

//Arry concat
const fruits1 = ['🍎', '🥝'];
const fruits2 = ['🍓', '🍌'];
arr = [...fruits1, '🍇', '🍑', ...fruits2];
console.log(arr);

//object
const ellie = { name: 'Ellie', age: 20, address: { national: 'korea', state: 'seoul' } };
const update = { ...ellie, job: 's/w engineer' };
console.log(update);

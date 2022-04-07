//1. 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
//주어진 배열을 수정하지 않는다
// ['🍌','🍓','🍇','🍓']
const arr1 = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(arr1, '🍇', '🥝');
function replace(arr1, fromItem, toItem) {
	// 파라미터를 사용하여 재사용성을 높여준다.
	const replaced = Array.from(arr1);
	for (let i = 0; i < replaced.length; i++) {
		if (replaced[i] === fromItem) {
			replaced[i] = toItem;
		}
	}
	return replaced;
}
console.log(result);
//2. 배열의 요소를 전달 받아 배열안에 그요소가 몇개 있는지 확인하는 함수 만들기
// ['🍌','🥝','🍇','🥝']
function count(arr2, item) {
	let counter = 0;
	for (i = 0; i < arr2.length; i++) {
		if (arr2[i] == item) {
			counter++;
		}
	}
	return counter;
}

const arr2 = ['🍌', '🥝', '🍇', '🥝'];
console.log(count(arr2, '🥝'));

//3. 두개의 배열을 전달 받아 공통되는 아이템만 배열로 반환
function match(arr3, arr4) {
	const result1 = [];
	for (i = 0; i < arr3.length; i++) {
		if (arr4.includes(arr3[i])) {
			result1.push(arr3[i]);
		}
	}
	return result1;
}

const arr3 = ['🍌', '🥝', '🍇'];
const arr4 = ['🍌', '🍓', '🍇', '🍓'];
console.log(match(arr3, arr4));

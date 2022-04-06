//1. 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
//주어진 배열을 수정하지 않는다
// ['🍌','🍓','🍇','🍓']
const arr1 = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(arr1, '🍓', '🥝');
function replace(arr1, fromItem, toItem) {
	// 파라미터를 사용하여 재사용성을 높여준다.
	return arr1.map((item) => (item === fromItem ? toItem : item));
}
console.log(result);

//2. 배열의 요소를 전달 받아 배열안에 그요소가 몇개 있는지 확인하는 함수 만들기
// ['🍌','🥝','🍇','🥝']
function count(arr2, item) {
	return arr2.filter((value) => value === item).length;
}

/**
	return arr2.reduce((count, value) => {
		if (value === item) {
			count++;
		}
		return count;
	}, 0);
	let counter = 0;
	for (i = 0; i < arr2.length; i++) {
		if (arr2[i] == item) {
			counter++;
		}
	}
	return counter;
} */

const arr2 = ['🍌', '🥝', '🍇', '🥝'];
console.log(count(arr2, '🥝'));

//3. 두개의 배열을 전달 받아 공통되는 아이템만 배열로 반환
function match(arr3, arr4) {
	return arr3.filter((item) => arr4.includes(item));
	// const result1 = [];
	// for (i = 0; i < arr3.length; i++) {
	// 	if (arr4.includes(arr3[i])) {
	// 		result1.push(arr3[i]);
	// 	}
	// }
	// return result1;
}

const arr3 = ['🍌', '🥝', '🍇'];
const arr4 = ['🍌', '🍓', '🍇', '🍓'];
console.log(match(arr3, arr4));

//퀴즈4 5보다틈 숫자등의 평균 값 구하기
const nums = [3, 16, 5, 25, 3, 34, 21];

const result2 = nums.filter((num) => num > 5).reduce((avg, num, _, array) => avg + num / array.length, 0);
console.log(result2);

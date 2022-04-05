//배열의 함수들
//배열 자체를 변경하는지 , 새로운 배열을 반환하는지
const fruits = ['🍌', '🍎', '🍇'];

//트정한 오브젝트가 배열인지 확인
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

//특정한 아이템의 위치(순서)를 찾을때
console.log(fruits.indexOf('🍎'));

//특정한 아이템이 있는지 확인 할 때
console.log(fruits.includes('🍎'));

// 추가 - 제일 뒤에
let length = fruits.push('🍑'); //배열자체를 수정(업데이트)
console.log(fruits);
console.log(length);

//추가 - 제일 앞에

length = fruits.unshift('🍓'); //배열자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 제거 - 제일 뒤
let lastItem = fruits.pop(); //pop()는 마지막 아이템을 제거하고 리턴한다.
console.log(fruits);
console.log(lastItem);
// 제거 - 제일 앞
lastItem = fruits.shift(); //shift()는 맨앞의 아이템을 제거하고 리턴한다.
console.log(fruits);
console.log(lastItem);

//중간에 추가  또는 삭제
const deleted = fruits.splice(1, 1); //  몇 번째 부터 몇번째에 있는것을 삭제하고 리턴한다.
console.log(fruits);
console.log(deleted);

fruits.splice(1, 0, '🍎', '🍓'); // 몇 번째 부터 몇번째에 있는것을 삭제할지 정하고  그자리에 추가 할 수 있다.
console.log(fruits);

//잘라진 새로운 배열을 만듬

let newArr = fruits.slice(0, 3); //0부터 2개의 아이템을 잘라서 새로운 배열을 만든다.
console.log(newArr);
console.log(fruits);
newArr = newArr.slice(-1); // 아무것도 입력하지 않으면 배열 전체가 반환이되어 배열을 만든다. 1을 넣어주면 1번 개체부터 끝까지
// -1을 넣어주면 맨뒤에서 1개체가 반환 된다.(-2는 맨뒤에서 2개의 개체)
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 배열의 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

// 배열 안의 배열을 하나의 배열로 만들기
let arr = [
	[1, 2, 3],
	[4, [[5, 6], 7]],
];
console.log(arr);
console.log(arr.flat()); // 1단계의 배열을 풀어 줄 수 있다 . 숫자를 넣어주면 해당하는 단계만큼 배열을 풀 수 있다.
console.log(arr.flat(2));
console.log(arr.flat(3)); // 새로운 배열을 리턴한다.
arr = arr.flat(3);
// 특정한 겂으로 배열을 채우기
arr.fill(0);
console.log(arr);

arr.fill('s', 1, 3); // 변환하여 배열을 채우는데 ('채울아이템' , 시작 순서 , 끝순서) 다만 끝순서는 변환 하지 않는다.
// 1번째 부터 3번째전까지  즉 1번째 2번째만 's'로 변환되어 채워진다.
console.log(arr);
arr.fill('s', 1); // 끝순서를 정하지 않는다면 끝까지 변환됨
console.log(arr);

//배열을 문자열로 합하기
let text = arr.join();
console.log(text);
text = arr.join('|'); // 기본적으로 ','를 사용하여 문자열로 변환 되지만 기호를 넣어주면 ','대신 사용 할 수 있다.
console.log(text);

//1. 문자열의 모든 캐릭터를 하나씩 출력하라
const text = 'Hello World!';

for (let i = 0; i < text.length; i++) {
	console.log(text[i]);
}

//2. 사용자들의 ID를 잘라서 가각의 ID를 배열로 보관

const ids = 'user1, user2, user3, user4';

console.log(ids.split(', '));

//3. 1초에 한번씩 시계를 출력해보자

setInterval(() => {
	console.log(new Date());
}, 1000);

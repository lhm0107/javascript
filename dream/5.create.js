// const apple = {
// 	name: 'apple',
// 	display: function () {
// 		console.log(`${this.name}:🍎`); // 객체안의 객체의 key 값을 가져오려면 this를 사용한다.
// 	},
// };

// const orange = {
// 	name: 'orange',
// 	display: function () {
// 		console.log(`${this.name}:🍊`); // 객체안의 객체의 key 값을 가져오려면 this를 사용한다.
// 	},
// };

function Fruit(name, emoji) {
	this.name = name;
	this.emoji = emoji;
	this.display = () => {
		console.log(`${this.name}: ${this.emoji}`);
	};
	//return this; //생략가능
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
apple.display();
orange.display();

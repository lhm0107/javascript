// const apple = {
// 	name: 'apple',
// 	display: function () {
// 		console.log(`${this.name}:๐`); // ๊ฐ์ฒด์์ ๊ฐ์ฒด์ key ๊ฐ์ ๊ฐ์ ธ์ค๋ ค๋ฉด this๋ฅผ ์ฌ์ฉํ๋ค.
// 	},
// };

// const orange = {
// 	name: 'orange',
// 	display: function () {
// 		console.log(`${this.name}:๐`); // ๊ฐ์ฒด์์ ๊ฐ์ฒด์ key ๊ฐ์ ๊ฐ์ ธ์ค๋ ค๋ฉด this๋ฅผ ์ฌ์ฉํ๋ค.
// 	},
// };

function Fruit(name, emoji) {
	this.name = name;
	this.emoji = emoji;
	this.display = () => {
		console.log(`${this.name}: ${this.emoji}`);
	};
	//return this; //์๋ต๊ฐ๋ฅ
}

const apple = new Fruit('apple', '๐');
const orange = new Fruit('orange', '๐');

console.log(apple);
console.log(orange);
console.log(apple.name);
apple.display();
orange.display();

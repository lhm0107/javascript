const apple = {
	name: 'apple',
	display: function () {
		console.log(`${this.name}:🍎`); // 객체안의 객체의 key 값을 가져오려면 this를 사용한다.
	},
};

apple.display();

// 접근자 프로퍼티(Accerssor Property)

class Student {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	get fullName() {
		return `${this.lastName} ${this.firstName}`;
	}

	set fullName(value) {
		console.log(value);
	}
}

const student = new Student('kim', 'suzi');
console.log(student.lastName);
console.log(student.fullName);
student.fullName = '김수지';
console.log(student);

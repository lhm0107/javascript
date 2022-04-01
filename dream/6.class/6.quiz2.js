//직원을 나타낼 수 있는 클래스를 만들어 보자
//직원의 정보 : 이름, 부서이름 ,한달 근무시간
// 매달 직원들의 정보를 이용하여 한달 월급을 계산할 수 있다.
//정직원을 시간당 10000원
//파트타임 직원은 시간당 8000원

// staff.salary();
// console.log(staff.staffSalaty);

// class Staff {
// 	name;
// 	employmentType;
// 	workingHours;
// 	#staffSalary;
// 	constructor(name, employmentType, workingHours) {
// 		if (employmentType === 'permanent') {
// 			this.#staffSalary = 10000 * workingHours;
// 		} else if (employmentType !== 'permanent') {
// 			this.#staffSalary = 8000 * workingHours;
// 		}
// 	}
// 	get salary() {
// 		return this.#staffSalary;
// 	}
// }

// const staff1 = new Staff('staff1', 'permanent', 30);
// const staff2 = new Staff('staff2', 'parttimer', 15);
// console.log(staff1.salary);
// console.log(staff2.salary);

class Employee {
	constructor(name, department, workingHours, payrate) {
		this.name = name;
		this.department = department;
		this.workingHours = workingHours;
		this.payrate = payrate;
	}
	calculatePay = () => {
		return this.workingHours * this.payrate;
	};
}

class permanetEmployee extends Employee {
	static #PAY_RATE = 10000;
	constructor(name, department, workingHours, payrate) {
		super(name, department, workingHours, permanetEmployee.#PAY_RATE);
	}
}

class partTimeEmployee extends Employee {
	static #PAY_RATE = 8000;
	constructor(name, department, workingHours, payrate) {
		super(name, department, workingHours, partTimeEmployee.#PAY_RATE);
	}
}

const staff1 = new permanetEmployee('김씨', '물류', 30);
const staff2 = new partTimeEmployee('박군', '택배', 20);
console.log(staff1.calculatePay());
console.log(staff2.calculatePay());
console.log(staff1);

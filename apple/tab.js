const tabButton = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".tab-content");
const buttonList = document.querySelector(".list");

buttonList.addEventListener("click", function (e) {
	if (e.target == tabButton[0]) {
	}
});

const car = { name: "소나타", price: [50000, 3000, 4000], color: "white" };

document.querySelector(".car-title").innerHTML = car.name;
document.querySelector(".car-price").innerHTML = car.price[0];

document.querySelectorAll(".form-select")[0].addEventListener("input", function () {
	if (document.querySelectorAll(".form-select")[0].value == "셔츠") {
		document.querySelector(".shirt-size").style.display = "block";
	} else if (document.querySelectorAll(".form-select")[0].value == "모자") {
		document.querySelector(".shirt-size").style.display = "none";
	}
});

const tabButton = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".tab-content");

tabButton.entries(0).addEventListener("click", function () {
	tabButton.classList.remove("orange");
	tabButton.entries(0).classList.add("orange");
});

import "./styles.css";
var birthDate = document.querySelector("#birthDate");
var luckyNum = document.querySelector("#luckyNum");
var checkBtn = document.querySelector("#checkBtn");
var outputTxt = document.querySelector("#outputTxt");
var bdaySum = 0;

function clickHandler() {
	var newBirthDate = birthDate.value.replace(/-/g, "");
	for (var i = 0; i < newBirthDate.length; i++) {
		bdaySum = bdaySum + parseInt(newBirthDate[i], 10);
	}
	if (newBirthDate === "" || luckyNum.value === "") {
		outputTxt.innerText = "✋Please fill in details first!";
	} else if (bdaySum % luckyNum.value === 0) {
		outputTxt.innerText = "✔️Your Birthday is Lucky!";
	} else {
		outputTxt.innerText = "❌Not so Lucky!";
	}
	bdaySum = 0;
}
checkBtn.addEventListener("click", clickHandler);

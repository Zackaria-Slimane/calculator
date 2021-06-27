//TODO
//* click a number
//* clear button action
//* delete button action
//* operatoins button
//* the period button
//* clicking equals

import { Calculator, firstNumber, secondNumber, operation, result, Calculator } from "./Calculator.js";

const calculator = new Calculator();

document.addEventListener("click", (e) => {
	if (e.target.matches("[data-number]")) {
		console.log(e.target.textContent);
		calculator.addNumber(e.target.textContent);
	}
	if (e.target.matches("[data-operation]")) {
		operation.dataset.value = true;
		console.log(e.target.textContent);
		console.log(operation);
	}
	//run the calculations
	if (e.target.matches("[data-equals]")) {
		console.log(e.target.textContent);
	}
	//deletes the last entry
	if (e.target.matches("[data-delete]")) {
		console.log(e.target.textContent);
	}
	//clear everything
	if (e.target.matches("[data-all-clear]")) {
		console.log("Clearing results");
		calculator.clear();
	}
});

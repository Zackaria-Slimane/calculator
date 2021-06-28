//TODO
//* click a number
//* clear button action
//* delete button action
//* operatoins button
//* the period button
//* clicking equals

import { Calculator, firstEntry, secondEntry, operationSign } from "./Calculator.js";

const calculator = new Calculator(firstEntry, secondEntry, operationSign);

document.addEventListener("click", (e) => {
	if (e.target.matches("[data-number]")) {
		calculator.addNumber(e.target.textContent);
	}
	if (e.target.matches("[data-operation]")) {
		console.log(e.target.textContent);
		// operationSign.textContent = e.target.textContent;
		calculator.runCalculation(e.target.textContent);
	}
	//run the calculations
	if (e.target.matches("[data-equals]")) {
		console.log("running calculations");
		calculator.calculate();
	}
	//deletes the last entry
	if (e.target.matches("[data-delete]")) {
		console.log("deleting last entry");
		calculator.removeNumber();
	}
	//clear everything
	if (e.target.matches("[data-all-clear]")) {
		console.log("Clearing results");
		calculator.clear();
	}
});

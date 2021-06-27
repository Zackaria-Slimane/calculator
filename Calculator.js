export const firstNumber = document.querySelector(".primary-operand");
export const secondNumber = document.querySelector(".secondary-operand");
export const operation = document.querySelector("[data-operation]");

export class Calculator {
	addNumber() {}

	removeNumber() {}

	clear() {}

	runCalculation(operation) {
		const n1 = parseFlaot(firstNumber.textContent);
		const n2 = parseFlaot(secondNumber.textContent);
		switch (operation) {
			case "+":
				return n1 + n2;
			case "*":
				return n1 * n2;
			case "-":
				return n1 - n2;
			case "÷":
				return n1 / n2;
		}
	}
}

export const firstEntry = document.querySelector("[data-primary-operand]");
export const secondEntry = document.querySelector("[data-secondary-operand]");
export const operationSign = document.querySelector("[data-operation]");

const digitSeperator = new Intl.NumberFormat("en-US", { maximumFractionDigits: 20 });

export class Calculator {
	constructor(firstEntry, secondEntry, operationSign) {
		this.firstEntry = firstEntry;
		this.secondEntry = secondEntry;
		this.operationSign = operationSign;
		this.clear();
	}
	// getters and setters for the entries text contents
	get firstEntryContent() {
		return parseFloat(this.firstEntry.textContent);
	}
	get secondEntryContent() {
		return parseFloat(this.secondEntry.textContent);
	}
	set firstEntryContent(value) {
		this.firstEntry.textContent = value;
	}
	set secondEntryContent(value) {
		this.secondEntry.textContent = value;
	}
	//class functions
	addNumber(number) {
		if (this.firstEntryContent === 0) {
			this.firstEntryContent = number;
			return;
		}
		this.firstEntryContent += number;
		console.log(digitSeperator.format(this.firstEntryContent));
		return digitSeperator.format(this.firstEntryContent);
	}

	removeNumber() {}

	clear() {
		this.firstEntryContent = 0;
		this.secondEntryContent = "";
		this.operationSign.textContent = "";
	}

	runCalculation(operation) {
		const n1 = this.firstEntryContent;
		const n2 = this.secondEntryContent;
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

	calculate() {}
}

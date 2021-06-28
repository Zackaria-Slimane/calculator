export const firstEntry = document.querySelector("[data-primary-operand]");
export const secondEntry = document.querySelector("[data-secondary-operand]");
export const operationSign = document.querySelector("[data-operation]");
//number formatting
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
		return parseFloat(this.firstEntry.dataset.value);
	}
	get secondEntryContent() {
		return parseFloat(this.secondEntry.dataset.value);
	}
	set firstEntryContent(value) {
		this.firstEntry.dataset.value = value;
		this.firstEntry.textContent = digitSeperator.format(value);
	}
	set secondEntryContent(value) {
		this.secondEntry.dataset.value = value;
		this.secondEntry.textContent = digitSeperator.format(value);
	}
	get operationSignContent() {
		return this.operationSign.textContent;
	}
	set operationSignContent(value) {
		this.operationSign.textContent = value;
	}

	//class functions
	addNumber(number) {
		if (this.firstEntryContent === 0) {
			this.firstEntryContent = number;
			return;
		}
		this.firstEntryContent = this.firstEntry.dataset.value + number;
		console.log(digitSeperator.format(this.firstEntryContent));
		digitSeperator.format(this.firstEntryContent);
	}

	removeNumber() {
		this.firstEntryContent = this.firstEntryContent.toString().slice(0, -1);
		console.log(this.firstEntryContent);
	}

	clear() {
		this.firstEntryContent = 0;
		this.secondEntryContent = "";
		this.operationSign.textContent = "";
	}

	runCalculation(operationSignContent) {
		if (!this.operationSignContent == "") return;
		this.operationSignContent = operationSignContent;
		this.secondEntryContent = this.firstEntryContent;
		this.firstEntryContent = 0;
	}

	calculate() {
		let n1 = this.firstEntryContent;
		let n2 = this.secondEntryContent;
		if (isNaN(n1) || isNaN(n2)) return;
		let result;
		switch (this.operationSignContent) {
			case "+":
				result = n2 + n1;
				console.log(result);
				break;
			case "*":
				result = n2 * n1;
				console.log(result);
				break;
			case "-":
				result = n2 - n1;
				console.log(result);
				break;
			case "÷":
				result = n2 / n1;
				console.log(result);
				break;
		}
		this.clear();
		this.firstEntryContent = result;
		return result;
	}
}

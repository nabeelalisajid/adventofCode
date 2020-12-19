const fs = require("fs");
const fileData = fs
	.readFileSync("./input.txt", "utf-8")
	.split("\n")
	.map((n) => Number(n));

function calculate() {
	let number1;
	let number2;
	let number3;
	for (let i = 0; i < fileData.length - 1; i++) {
		for (let j = i + 1; j < fileData.length - 2; j++) {
			for(let k = j + 1; k <  fileData.length; k++) {

				if (fileData[i] + fileData[j] + fileData[k] === 2020) {
					number1 = fileData[i];
					number2 = fileData[j];
					number3 = fileData[k];
					break;
				}
			}
		}
	}
	if(number1 && number2 * number3) {
		return number1 * number2 * number3;
	}
}

console.log(calculate());
const fs = require("fs");
let fileData = fs.readFileSync("./input.txt", "utf-8").split("\n");
console.log(fileData);

let highest = 0;
let min = Number.MAX_VALUE;
const seats = {};
// part 1:
fileData.forEach((seat) => {
	let rows = Array.from(Array(128).keys());
	let row = 0;
	let seatId = 0;
	let column = 0;
	for (let i = 0; i < 7; i++) {
		const ch = seat.charAt(i);
		switch (ch) {
			case "F":
				rows = rows.slice(0, rows.length / 2);
				// console.log(0, rows.length);
				break;
			case "B":
				// console.log(rows.length / 2, rows.length + 1);
				rows = rows.slice(rows.length / 2, rows.length + 1);
				break;
		}
	}
	// console.log(rows);
	row = rows[0];
	let columns = Array.from(Array(8).keys());
	for (let i = 7; i < 10; i++) {
		const ch = seat.charAt(i);
		switch (ch) {
			case "R":
				columns = columns.slice(columns.length / 2, columns.length + 1);
				break;
			case "L":
				columns = columns.slice(0, columns.length / 2);
				break;
		}
	}
	column = columns[0];
	seatId = row * 8 + column;
	seats[seatId] = true;
	highest = seatId > highest ? seatId : highest;
	min = seatId < min ? seatId : min;
});

// part II
let myPossibleNumber = -1;
const possibleValues = Object.keys(seats);
for(let i = min; i <= highest; i++ ){
	if(!seats[i]){
		myPossibleNumber = i;
	}
}
console.log(myPossibleNumber);
const { count } = require("console");
const fs = require("fs");
const fileData = fs.readFileSync("./input.txt", "utf-8").split("\n").map(c => c.repeat(627));
console.log(fileData.length);
// let right = 3;
// let down = 1;
// let countTree = 0;
// for(let i = 1; i < fileData.length; i++) {
// 	const row = fileData[i];
// 	if(row.charAt(right)== '#'){
// 		console.log(row.charAt(right),"==================" ,row)
// 		countTree++;
// 	}
// 	right = right + 3;
// }
// console.log(countTree);
const slopes = [
	{
		right: 1,
		down: 1,
	},
	{
		right: 3,
		down: 1,
	},
	{
		right: 5,
		down: 1,
	},
	{
		right: 7,
		down: 1,
	},
	{
		right: 1,
		down: 2,
	},
];
const totaltreeCount = [];
slopes.forEach(item => {
	let right = item.right;
	let down = 1;
	let countTree = 0;
	for (let i = item.down; i < fileData.length; i = i + item.down) {
		const row = fileData[i];
		if (row.charAt(right) == "#") {
			console.log(row.charAt(right), "=",row.length, right, i);
			countTree++;
		}
		right = right + item.right;
	}
	totaltreeCount.push(countTree);
})
let total = 1
 totaltreeCount.forEach(test => {
	total = total * test;
})
console.log(total,totaltreeCount);
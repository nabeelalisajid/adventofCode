const fs = require("fs");
let fileData = fs.readFileSync("./input.txt", "utf-8").split("\n\n");

fileData = fileData
	.map((i) => i.split("\n").join(" "))
	.map((i) => {
		let obj = {};
		i = i.split(" ");
		i.forEach((v) => {
			const [key, value] = v.split(":");
			obj[key] = value;
		});
		return obj;
	});

let validCount = 0;

const alsoValid = "cid";

// Part 1
// fileData.forEach(i => {
// 	// console.log(i.length, i);
// 	const keys = Object.keys(i);
// 	// console.log(keys, keys.length, keys.indexOf(alsoValid));
// 	if(keys.length == 8 || keys.length == 7 && keys.indexOf(alsoValid) === -1){
// 		validCount++;

// 		for(let [index, value] of Object.entries(i)) {
// 			console.log(index, value)
// 		}
// 	}
// })
fileData.forEach((i) => {
	// console.log(i.length, i);
	const keys = Object.keys(i);
	// console.log(keys, keys.length, keys.indexOf(alsoValid));
	if (
		keys.length == 8 ||
		(keys.length == 7 && keys.indexOf(alsoValid) === -1)
	) {
		let countValidConditions = 0;
		console.log("\n\n");
		for (let [index, value] of Object.entries(i)) {
			// console.log(index, value);
			switch (index) {
				case "byr":
					if (Number(value) >= 1920 && Number(value) <= 2002) {
						countValidConditions++;
					}
					break;
				case "iyr":
					if (Number(value) >= 2010 && Number(value) <= 2020) {
						countValidConditions++;
					}
					break;
				case "eyr":
					if (Number(value) >= 2020 && Number(value) <= 2030) {
						countValidConditions++;
					}
					break;
				case "hgt":
					// console.log("height", value);
					if (value.endsWith("cm")) {
						let height = parseInt(value);
						if (height >= 150 && height <= 193) {
							countValidConditions++;
						}
					} else if (value.endsWith("in")) {
						let height = parseInt(value);
						if (height >= 59 && height <= 76) {
							countValidConditions++;
						}
					}
					break;
				case "hcl":
					const test1 = new RegExp(/^#[0-9A-F]{6}$/i);
					if (test1.test(value)) {
						// console.log("hcl", value);
						countValidConditions++;
					}
					break;
				case "ecl":
					const eclValues = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
					// console.log(value, eclValues.includes(value), eclValues);
					if (eclValues.includes(value)) {
						countValidConditions++;
					}
					break;
				case "pid":
					const test = new RegExp(/^\d{9}$/);
					console.log(test.test(value), value);
					if (test.test(value)) {
						countValidConditions++;
					}
					break;
				default:
					break;
			}
		}
		console.log("countValidConditions", countValidConditions);
		if (countValidConditions === 7) {
			validCount++;
		}
	}
});
console.log("validCount", validCount);

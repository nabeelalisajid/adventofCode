const fs = require("fs");
let fileData = fs.readFileSync("./input.txt", "utf-8").split("\n\n");

fileData = fileData.map((i) => i.split("\n").join(" ")).map(i => {
	let obj = {};
	i = i.split(" ");
	i.forEach(v => {
		const [key, value] = v.split(":");
		obj[key]=value;
	})
	return obj;
});


let validCount = 0;

const alsoValid = 'cid';

fileData.forEach(i => {
	// console.log(i.length, i);
	const keys = Object.keys(i);
	// console.log(keys, keys.length, keys.indexOf(alsoValid));
	if(keys.length == 8 || keys.length == 7 && keys.indexOf(alsoValid) === -1){
		validCount++;

		for(let [index, value] of Object.entries(i)) {
			console.log(index, value)
		}
	}
})
console.log("validCount", validCount);
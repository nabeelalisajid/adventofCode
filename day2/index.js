const fs = require("fs");
const fileData = fs.readFileSync("./input.txt", "utf-8").split("\n");

function countPassword() {
	const passwordMap = fileData.map((data) => data.split(":"));
	let passwordCount = 0;
	passwordMap.forEach((password) => {
		const [hint, actualPassword] = password;
		const [limit, character] = hint.split(" ");
		const [lowerLimit, upperLimit] = limit.split("-").map((c) => Number(c));
		const firstCharacter = actualPassword.charAt(lowerLimit);
		const secondCharacter = actualPassword.charAt(upperLimit);
		if (
			(firstCharacter === character && secondCharacter !== character) ||
			(firstCharacter !== character && secondCharacter === character)
		) {
			console.log(
				limit,
				actualPassword,
				firstCharacter,
				secondCharacter,
				character
			);
			// console.log(hint, actualPassword);
			passwordCount++;
		}
		// 4-9 g  gggggggglg
		// for(let i = 0; i< actualPassword.length; i++) {
		// 	if (actualPassword.charAt(i) == character) {
		// 		countCharacter++;
		// 	}

		// }
		// if(countCharacter >= lowerLimit && countCharacter <= upperLimit) {
		// 	// console.log(password, countCharacter)
		// 	passwordCount++;
		// }
	});
	return passwordCount;
}
console.log(countPassword());

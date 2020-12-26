const { group, count } = require("console");
const fs = require("fs");
// let groups = fs.readFileSync("./sample.txt", "utf-8").split("\n\n");
// groups = groups.map((i) => i.split("\n").filter((j) => j != ""));
// // console.log(groups);
// let groupCount = 0;
// // part 1:
// groups.forEach((group) => {
// 	// group = group.split("\n").filter(i => i!= "");
// 	const saidYes = {};
// 	// console.log("group => ", group);
// 	group.forEach((ans) => {
// 		// console.log(ans);
// 		for(let i = 0; i< ans.length; i++){
// 			// console.log(ans.charAt(i));
// 			saidYes[ans.charAt(i)] = true
// 		}
// 	});
// 	groupCount += Object.keys(saidYes).length;
// });
// console.log(groupCount);

// part 2:
let totalQuestion = {};
let groups2 = fs
	.readFileSync("./input.txt", "utf-8")
	.split("\n\n")
	.filter((i) => i != "");
// groups2 = groups2.map((i) => i.split("\n").filter((j) => j != ""));
let questionCount = 0;
console.log(groups2);
groups2.forEach((group) => {
	group = group.split("\n");
	const saidYes = {};
	console.log("group => ", group);
	let isDouble = false;
	let isDuplicate = false;
	let noOfQuestions = group.length;
	if(noOfQuestions === 1) {
		questionCount =  questionCount + group[0].length;
		console.log("question count",questionCount)
	} else {
		group.forEach((questions) => {

			isDouble = questions.length > 1;
			for (let i = 0; i < questions.length; i++) {
				console.log("", questions.charAt(i));

				saidYes[questions.charAt(i)] = saidYes[questions.charAt(i)]
					? saidYes[questions.charAt(i)] + 1
					: 1;

			}
		});
		const totalKeys = Object.keys(saidYes).length;
		Object.keys(saidYes).forEach(i => {
			// console.log("totalKeys", saidYes[i], group.length)
			if(saidYes[i] == group.length) {

				questionCount = questionCount + 1;
				console.log("question count inside", questionCount);
				// questionCount = questionCount +
			}
		})
	}
});
console.log(questionCount);

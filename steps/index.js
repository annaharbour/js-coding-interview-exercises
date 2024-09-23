// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
	for (let i = 0; i < n; i++) {
		let str = "";
		for (let j = 0; j < n; j++) {
			if (j <= i) {
				str += "#";
			} else {
				str += " ";
			}
		}
		console.log(str);
	}
}

// Recursive solution:
// function steps(n, row = 0, stair = "") {
// base case of n === 0
// 	if (n === row) {
// 		return;
// 	}
//  recursive call logging stair and iterating the row we are on
// 	if (n === stair.length) {
// 		console.log(stair);
// 		return steps(n, row + 1);
// 	}
// 	conditional to add "#" or " " to the stair
// 	const add = stair.length <= row ? "#" : " ";
// 	steps(n, row, stair + add);
// }


module.exports = steps;

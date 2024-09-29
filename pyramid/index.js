// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Iterative solution:


// function pyramid(n) {
//     // calculate midpoint of pyramid's base
//     const mid = Math.floor((2 * n - 1) / 2);
//     // iterate over rows
//     for (let i = 0; i < n; i++) {
//         // str holds characters for current level
//         let str = "";
//         // iterate over columns
//         for (let j = 0; j < 2 * n - 1; j++) {
//             // if column is within the range of the pyramid's base
//             if (mid - i <= j && mid + i >= j) {
//                 // add a "#" to str
//                 str += "#";
//             } else {
//                 // add a space to str
//                 str += " ";
//             }
//         }
//         // log str
//         console.log(str);
//     }
// }

// Recursive solution:

function pyramid(n, row=0, str=''){
    if(n===row){
        return;
    }
    if(2*n-1 === str.length){
        console.log(str);
        return pyramid(n, row+1);
    }
    const mid = Math.floor((2 * n - 1) / 2);
    const add = mid - row <= str.length && mid + row >= str.length ? '#' : ' ';
    pyramid(n, row, str + add);
}

module.exports = pyramid;

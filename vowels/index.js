// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const vowelArr = ['a', 'e', 'i', 'o', 'u'];

    return str.split('').reduce((acc, char) => {
        if (vowelArr.includes(char.toLowerCase())) {
            return acc + 1;
        }
        return acc;
    }, 0);
}

module.exports = vowels;

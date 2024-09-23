// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charsMap = {};
    let max = 0;
    let maxChar = ''

    for (let char of str) {
        charsMap[char] = charsMap[char] + 1 || 1;
        if(charsMap[char] > max) {
            max = charsMap[char];
            maxChar = char;
        }
    }
    
    return maxChar;
}
maxChar("abcccccccd") 
maxChar("apple 1231111") 

module.exports = maxChar;


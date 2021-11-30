console.log(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD'))

function runLengthEncoding(string) {
    let result = "";
    let letter = string[0];
    let letterCount = 1;
    for (let i = 1; i < string.length + 1; i++) {
        console.log(result)
        if (string[i] === letter && letterCount < 9) {
            letterCount++;
        } else {
            result += letterCount + letter;
            letter = string[i]
            letterCount = 1;
        }
    }
    return result
}

// Merci de ne pas effacer la ligne en dessous.
exports.runLengthEncoding = runLengthEncoding;AAA"))
test = "kayak"

result = isPalindrome(test)

console.log(result)

function isPalindrome(string) {

    return string == string.split('').reverse().join('');

}
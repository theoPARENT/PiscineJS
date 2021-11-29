let array = [ 3, 5, -4, 8, 11, 1, -1, 6]
let targetSum = 10
resultTask = twoNumberSum(array,targetSum)

console.log(resultTask)

/**
 *
 * @param array
 * @param targetSum
 * @returns {*[]}
 */
function twoNumberSum (array, targetSum) {
    let result = []
    array.forEach(function (value, i) {
        array.forEach(function (value2, j) {
            if (i !== j) {
                if ((value + value2) == targetSum) {
                    console.log('La combinaison de ' + value + ' et ' + value2 + ' est bien égale à ' + targetSum)
                    let tab = [value, value2]

                    result.push(tab)

                }
            }
        })
    })
    return result
}
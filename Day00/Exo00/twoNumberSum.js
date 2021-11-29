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
                    result.push(value,value2)
                }
            }
        })
    })
    var unique = result.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    })

    return unique
}
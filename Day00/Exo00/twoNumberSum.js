let array = [1,-4,5,7,12,10,2,9]
let targetSum = 10

string = 'test'

resultTask = twoNumberSum(array,targetSum)

console.log(resultTask)

function twoNumberSum (array, targetSum) {
    let result = []
    array.forEach(function (value, i) {
        array.forEach(function (value2, j) {
            if ((value + value2) == targetSum){
                console.log('La combinaison de ' + value + ' et ' + value2 + ' est bien égale à ' + targetSum)
                let tab = [value,value2]
                result.push(tab)
            }
        })
    })
    return result
}
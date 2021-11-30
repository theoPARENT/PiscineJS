console.log(firstDuplicateValue([ 1, 2, 3, 4, 5, 2]))

function firstDuplicateValue(arrayInt) {
    let duplicate = null

    arrayInt.forEach(function (value1, i) {
        arrayInt.forEach(function (value2, j){
            if (duplicate) {
                return duplicate
            }
            if (i !== j) {
                if (value1 == value2) {
                    duplicate = value2
                    return value1
                }
            }
        })
    })
    if (duplicate) {
        return duplicate
    }else {
        return -1
    }
}
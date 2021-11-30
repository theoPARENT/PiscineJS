console.log(firstDuplicateValue([2,1,5,3,3,2,4]))

function firstDuplicateValue(arrayInt) {
    let duplicate = null

    arrayInt.forEach(function (value1, i) {
        if (duplicate !== null) return duplicate
        arrayInt.forEach(function (value2, j){
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
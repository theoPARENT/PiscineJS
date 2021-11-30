console.log(tabTriCarre([ 1, 2, 3, 4, 5]))


function tabTriCarre (tabInt) {
    let result = []
    let calcul = 0

    tabInt.forEach(function (value, i ) {
        calcul = value * value
        result.push(calcul)

    })
    return result.sort(compare)
    function compare(x,y) {
        return x - y;
    }

}
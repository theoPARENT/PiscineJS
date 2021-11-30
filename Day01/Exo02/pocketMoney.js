console.log(pocketMoney([ 5, 7, 1, 1, 2, 3, 22]))

function pocketMoney(array){
    let P = array.sort(function(a, b) {return a - b;})
    let piece = 0;
    for (let i = 0; i < P.length; i++) {
        if (P[i] > piece + 1){
            return piece + 1
        }
        piece += P[i]
    }
    return piece + 1
}
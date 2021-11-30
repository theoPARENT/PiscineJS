console.log(test([3,5,4,4,3,1,3,2], 'east'))


function test(buildings, direction){
    let length = buildings.length
    let result = []
    let tamp = null
    if (direction.toLowerCase() === 'west') {
        result.push(0)
        for (let i=1;i<length;i++) {
            if ( tamp !== null) {
                if (buildings[i] > buildings[tamp]) {
                    result.push(i)
                    tamp = null
                }
            } else if (buildings[i] > buildings[i-1]) {
                result.push(i)
            } else {
                tamp = i-1
            }
        }
    } else if (direction.toLowerCase() === 'east') {
        result.push(length-1)
        for (let i=length-2;i>=0;i--) {
            if ( tamp !== null) {
                if (buildings[i] > buildings[tamp]) {
                    result.push(i)
                    tamp = null
                }
            } else if (buildings[i] > buildings[i+1]) {
                result.push(i)
            } else {
                tamp = i+1
            }
        }
    }
    return result.sort()
}

// Merci de ne pas effacer la ligne en dessous.
exports.sun = test ;
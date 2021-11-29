console.log(sun([3,5,6,1,2,4,3], 'Est'))


function sun(buildings, direction){
    let length = buildings.length
    let result = []
    let tamp = null
    if (direction === 'Ouest') {
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
    } else if (direction === 'Est') {
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
    return result
}

// Merci de ne pas effacer la ligne en dessous.
exports.sun = sun ;
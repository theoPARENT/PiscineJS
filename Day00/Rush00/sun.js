function sun(buildings, direction) {

    let count = 1;
    let curr_max = arr[0];
    for (let i = 1; i < n; i++) {

        if (arr[i] > curr_max || arr[i] == curr_max) {
            count++;
            curr_max = arr[i];
        }
    }
    return count;
}
let arr = [ 7, 4, 6, 2, 1 ];
let n = arr.length;
document.write(sun(arr, n));
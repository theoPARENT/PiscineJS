result = levDist("abc","yabd")

console.log(result)

function levDist(string1, string2) {
    var i = 0;
    var j = 0;
    var result = "";

    while (j < string2.length)
    {
        if (string1[i] != string2[j] || i == string1.length)
            result += string2[j];
        else
            i++;
        j++;
    }
    return result.length;

}
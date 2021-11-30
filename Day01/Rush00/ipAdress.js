




function validIpAdresses(string) {


    let result =[]
    defineIp(string,0,result,[],4,string.length)

    // if (result[6] === 0 && result[7] === 0){
    //     result.splice(6,1)
    //     result.splice(7,1)
    // }
    // if (result[9] === 0 && result[10] === 0){
    //     result.splice(9,1)
    //     result.splice(10,1)
    //
    //
    // }
    return result


    function defineIp(string,ind,res,temp,seg,l){

        if ((seg===0 && ind < l) || (seg!==0 && ind >= l )) return
        if (seg===0 && ind === l){
            res.push(temp.slice().join('.'))
            return
        }

        for (let i=1;i<=3;i++){
            if (ind+i > l) break
            let chunk = string.substring(ind,ind+i)
            if (isValid(chunk)){
                temp.push(chunk)
                defineIp(string,ind+i,res,temp,seg-1,l)
                temp.pop()
            }
        }
    }

    function isValid(str){
        if (str.length > 1 && str[0] === '0') return false
        if (parseInt(str) <= 255) return true
        return false
    }


}


console.log(validIpAdresses('192168008001'))
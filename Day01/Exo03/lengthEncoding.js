

const runLengthEncode = string => string.replace(/(.)\1+/g, ({ length }, char) => length + char);

console.log(runLengthEncode("AAAAAAAAAAA"))

const RLE = {
    encode: str => str.replace(/(\w)\1+/g, (m, c) => `${9}${c}`),
    decode: str => str.replace(/(\d+)(\w)/g, (_, d, c) => c.repeat(d))
}

console.log(RLE.encode("AAAAAAAAAAA"))
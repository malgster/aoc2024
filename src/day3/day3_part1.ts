import fs from "fs";


export function findAllMuls() {

    // thomas m'a forcé de le faire en une ligne...

    return Array.from(fs.readFileSync('input.txt', 'utf-8').matchAll(/mul\(\d+,\d+\)/gm)).reduce((p, [mul]) => p += parseInt(mul.substring(4, mul.indexOf(','))) * parseInt(mul.substring(mul.indexOf(',')+1,mul.indexOf(')'))),0)


}
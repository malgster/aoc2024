
import fs from "fs";

export function findAlldoAndDontMul() {


    // j'ai un peu triché pour la regex...

    let do_sum = true; return Array.from(fs.readFileSync('input.txt', 'utf-8').matchAll(/do\(\)|don't\(\)|mul\((\d{1,3}),(\d{1,3})\)/g)).reduce((acc, x) => x[0] === "do()" ? (do_sum = true, acc) : x[0] === "don't()" ? (do_sum = false, acc) : do_sum ? acc + parseInt(x[1]) * parseInt(x[2]) : acc, 0);


}
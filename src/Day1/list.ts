
import * as fs from 'fs'


export function parseColumns() {
   const data = fs.readFileSync('input.txt', 'utf-8')
    const lines = data.trim().split('\n')


    let columnOne: number[] = []
    let columnTwo: number[] = []


    lines.forEach(line => {
        const parts = line.split('  ')
        const num1 = parseInt(parts[0])
        const num2 = parseInt(parts[1])
        columnOne.push(num1)
        columnTwo.push(num2)
    })


    columnOne.sort()
    columnTwo.sort()

   console.log("colonne 1",columnOne)
    console.log("colonne 2", columnTwo)

    let distance = 0

    for (let i = 0; i < columnOne.length; i++) {
        distance += Math.abs(columnTwo[i] - columnOne[i])
    }

    console.log(distance)


}



import * as fs from 'fs'

export function identifySafeReports() {
    const data = fs.readFileSync('input.txt', 'utf-8')
    const lines = data.trim().split('\n')

    let safeReportsCpt = 0

    for (let i = 0; i < lines.length; i++) {
        const report = lines[i].split(' ').map(e => parseInt(e))

        if (isTheLineSafe(report)) safeReportsCpt++
    }

    console.log(safeReportsCpt)

}

function isTheLineSafe(report: number[]) {


    const sign = report[0] - report[1]



    if (sign > 0) {

        for (let i = 0; i < report.length-1; i++) {
            const gap = report[i] - report[i+1]

            if (gap < 1 || gap > 3) return false
         }
    } else if (sign < 0) {

        for (let i = 0; i < report.length-1; i++) {

            const gap = report[i+1] -report[i]

            if (gap < 1 || gap > 3) return false
        }
    } else return false

    return true

}
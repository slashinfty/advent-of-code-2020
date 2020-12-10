'use strict';
// Adapter Array

module.exports = {
    name: 'day10',
    exe: () => {
        const input = require('fs').readFileSync(require('path').join(__dirname, '../inputs/day10.txt'), 'utf-8').split('\n').filter(Boolean).map(x => parseInt(x));
        // Test
        //const input = [28, 33, 18, 42, 31, 14, 46, 20, 48, 47, 24, 23, 49, 45, 19, 38, 39, 11, 1, 32, 25, 35, 8, 17, 7, 9, 4, 2, 34, 10, 3];
        // Part one test answer: 220
        // Part two test answer: 19208

        // Part one: Find the number of differences of 1 and 3 of the numbers, and multiply the result
        const a = [...input.sort((x, y) => x - y)];
        a.unshift(0);
        a.push(a.reduce((x, y) => Math.max(x, y)) + 3);
        let i = 1;
        let ones = 0;
        let threes = 0;
        do {
            ones += a[i] - a[i - 1] === 1;
            threes += a[i] - a[i - 1] === 3;
            i++;
        } while (i < a.length);
        console.log('Part One: ' + (ones * threes).toString());

        // Part two: Find the number of distinct arrangements of numbers
        const b = [1];
        i = 1;
        do {
            const c = a.filter(x => a[i] - x <= 3 && a[i] - x >= 1);
            let d = 0;
            c.forEach(x => d += b[a.findIndex(y => y.toString() === x.toString())]);
            b.push(d);
            i++;
        } while (i < a.length);
        console.log('Part Two: ' + b.pop());
    }
}
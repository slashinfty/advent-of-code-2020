'use strict';
// Encoding Error

module.exports = {
    name: 'day09',
    exe: () => {
        const input = require('fs').readFileSync(require('path').join(__dirname, '../inputs/day09.txt'), 'utf-8').split('\n').filter(Boolean).map(x => parseInt(x));
        // Test
        // const input = [35, 20, 15, 25, 47, 40, 62, 55, 65, 95, 102, 117, 150, 182, 127, 219, 299, 277, 309, 576];
        // Part one test answer: 127 (25 must be 5)
        // Part two test answer: 62 (see above)

        // Part one: Determine the first number that isn't the sum of two numbers in the previous 25 numbers.
        let a = 0;
        let i = 0;
        do {
            const b = input.slice(i, i + 25);
            const c = b.filter((x, j) => {
                const y = b.indexOf(input[i + 25] - x);
                return y > -1 && y !== j;
            });
            if (c.length === 0) a = input[i + 25];
            i++;
        } while (a === 0);
        console.log('Part One: ' + a);

        // Part two: Find a contiguous set of numbers whose sum is the number found in part one.
        i = 0;
        let j = i + 1;
        let k = [input[i]];
        let b;
        do {
            k.push(input[j]);
            if (k.reduce((x, y) => x + y) < a) j++;
            else if (k.reduce((x, y) => x + y) > a) {
                i++;
                j = i + 1;
                k = [input[i]];
            } else {
                b = k.reduce((x, y) => Math.min(x, y)) + k.reduce((x, y) => Math.max(x, y));
                break;
            }
        } while (true);
        console.log('Part Two: ' + b);
    }
}
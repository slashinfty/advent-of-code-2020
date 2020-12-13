'use strict';

module.exports = {
    name: 'day13',
    exe: () => {
        //const input = require('fs').readFileSync(require('path').join(__dirname, '../inputs/day13.txt'), 'utf-8').split('\n').filter(Boolean);
        // Test
        const input = ["939", "7,13,x,x,59,x,31,19"];
        // Part one test answer: 295
        // Part two test answer: 1068781

        // Part one: 
        const a = input[1].split(',').filter(x => /^\d+/.test(x)).reduce((x, y) => x =  y * Math.ceil(input[0] / y) - input[0] < x * Math.ceil(input[0] / x) - input[0] ? y : x);
        console.log('Part One: ' + (a * (a * Math.ceil(input[0] / a) - input[0])));

        // Part two: 
        const b = input[1].split(',');
        const c = b.filter(x => /^\d+/.test(x));
        let i = 0;
        let t = 0;
        outer: while (true) {
            i++;
            t = c[0] * i;
            inner: for (let j = 1; j < c.length; j++) {
                if ((t + b.indexOf(c[j])) % c[j] !== 0) break inner;
                if (j === c.length - 1) break outer;
            }
        }
        console.log('Part Two: ' + t);
    }
}
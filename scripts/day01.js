'use strict';

module.exports = {
    name: 'day01',
    exe: () => {
        const input = require('fs').readFileSync(require('path').join(__dirname, '../inputs/day01.txt'), 'utf-8').split('\n').filter(Boolean).map(x => parseInt(x));
        let a, b;
        out1: for (let i = 0; i < input.length - 1; i++) {
            for (let j = i + 1; j < input.length; j++) {
                const sum = input[i] + input[j];
                if (sum === 2020) {
                    a = input[i];
                    b = input[j];
                    break out1;
                }
            }
        }
        console.log('Part One: ' + a + ' * ' + b + ' = ' + (a * b).toString());
        let c, d, e;
        out2: for (let i = 0; i < input.length - 2; i++) {
            for (let j = i + 1; j < input.length - 1; j++) {
                for (let k = i + 2; k < input.length; k++) {
                    const sum = input[i] + input[j] + input[k];
                    if (sum === 2020) {
                        c = input[i];
                        d = input[j];
                        e = input[k];
                        break out2;
                    }
                }
            }
        }
        console.log('Part Two: ' + c + ' * ' + d + ' * ' + e + ' = ' + (c * d * e).toString());
    }
}
'use strict';

module.exports = {
    name: 'day01',
    exe: () => {
        const input = require('fs').readFileSync(require('path').join(__dirname, '../inputs/day01.txt'), 'utf-8').split('\n').filter(Boolean).map(x => parseInt(x));
        
        // Part one: find two numbers in a list that sum to 2020 and return their product (0.000s).
        const t0 = Date.now();
        const a = input.filter(x => input.indexOf(2020 - x) > -1);
        const p1 = a.reduce((x, y) => x * y);
        const t1 = Date.now();
        console.log('Part One: ' + a[0] + ' * ' + a[1] + ' = ' + p1.toString());
        console.log('Finished in ' + ((t1 - t0) / 1e3).toString() + 's');

        // Part two: find three numbers in a list that sum to 2020 and return their product (0.001s).
        const t2 = Date.now();
        input.sort((a, b) => a - b);
        let c, d, e;
        out2: for (let i = 0; i < input.length - 2; i++) {
            for (let j = i + 1; j < input.length - 1; j++) {
                for (let k = i + 2; k < input.length; k++) {
                    const sum = input[i] + input[j] + input[k];
                    if (sum > 2020) break;
                    if (sum === 2020) {
                        c = input[i];
                        d = input[j];
                        e = input[k];
                        break out2;
                    }
                }
            }
        }
        const p2 = c * d * e;
        const t3 = Date.now();
        console.log('Part Two: ' + c + ' * ' + d + ' * ' + e + ' = ' + p2.toString());
        console.log('Finished in ' + ((t3 - t2) / 1e3).toString() + 's');
        
        /*
        //Initial part one solution (0.000s):
        const t0 = Date.now();
        input.sort((a, b) => a - b);
        let a, b;
        out1: for (let i = 0; i < input.length - 1; i++) {
            for (let j = i + 1; j < input.length; j++) {
                const sum = input[i] + input[j];
                if (sum > 2020) break;
                if (sum === 2020) {
                    a = input[i];
                    b = input[j];
                    break out1;
                }
            }
        }
        const p1 = a * b;
        const t1 = Date.now();
        console.log('Part One: ' + a + ' * ' + b + ' = ' + p1.toString());
        console.log('Finished in ' + ((t1 - t0) / 1e3).toString() + 's');

        //Alternative part two solution (0.004s):
        const t2 = Date.now();
        const diff = input.map(x => 2020 - x);
        let b;
        let i = 0;
        do {
            const c = input.filter(x => input.indexOf(diff[i] - x) > -1);
            if (c.length > 0) b = c;
            else i++;
        } while (b === undefined);
        b.push(input[i]);
        const p2 = b.reduce((x, y) => x * y);
        const t3 = Date.now();
        console.log('Part Two: ' + b[0] + ' * ' + b[1] + ' * ' + b[2] + ' = ' + p2.toString());
        console.log('Finished in ' + ((t3 - t2) / 1e3).toString() + 's');
        */
    }
}
'use strict';

module.exports = {
    name: 'day01',
    exe: () => {
        const input = require('fs').readFileSync(require('path').join(__dirname, '../inputs/day01.txt'), 'utf-8').split('\n').filter(Boolean).map(x => parseInt(x));

        // Part One: find two numbers in a list that sum to 2020 and return their product.
        const a = input.filter(x => input.indexOf(2020 - x) > -1);
        console.log('Part One: ' + a[0] + ' * ' + a[1] + ' = ' + (a.reduce((x, y) => x * y)).toString());

        // Part Two: find three numbers in a list that sum to 2020 and return their product.
        const diff = input.map(x => 2020 - x);
        let b;
        let i = 0;
        do {
            const c = input.filter(x => input.indexOf(diff[i] - x) > -1);
            if (c.length > 0) b = c;
            else i++;
        } while (b === undefined);
        b.push(input[i]);
        console.log('Part Two: ' + b[0] + ' * ' + b[1] + ' * ' + b[2] + ' = ' + (b.reduce((x, y) => x * y)).toString());
    }
}
'use strict';
// Report Repair

module.exports = {
    name: 'day01',
    exe: () => {
        const input = require('fs').readFileSync(require('path').join(__dirname, '../inputs/day01.txt'), 'utf-8').split('\n').filter(Boolean).map(x => parseInt(x));
        // Test
        // const input = [1721, 979, 366, 299, 675, 1456];
        // Part one test answer: 514579
        // Part two test answer: 241861950
        
        // Part one: find two numbers in a list that sum to 2020 and return their product.
        const a = input.filter(x => input.indexOf(2020 - x) > -1).reduce((x, y) => x * y);
        console.log('Part One: ' + a);

        // Part two: find three numbers in a list that sum to 2020 and return their product.
        const diff = input.map(x => 2020 - x);
        let b;
        let i = 0;
        do {
            const c = input.filter(x => input.indexOf(diff[i] - x) > -1);
            if (c.length > 0) b = c;
            else i++;
        } while (b === undefined);
        b.push(input[i]);
        console.log('Part Two: ' + b.reduce((x, y) => x * y));
    }
}
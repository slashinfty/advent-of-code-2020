'use strict';

module.exports = {
    name: 'day06',
    exe: () => {
        const input = require('fs').readFileSync(require('path').join(__dirname, '../inputs/day06.txt'), 'utf-8').split('\n');
        // Test
        /*const input = [
            'abc',
            '',
            'a',
            'b',
            'c',
            '',
            'ab',
            'ac',
            '',
            'a',
            'a',
            'a',
            'a',
            '',
            'b'
        ];*/
        // Part one test answer: 11
        // Part two test answer: 6

        // Part one: find the sum of the number of questions answered yes by anyone in each group.
        // Part two: find the sum of the number of questions answered yes by everyone in each group.
        let a = 0;
        let b = 0;
        let c = [];
        let d = [...input[0]];
        for (let i = 0; i < input.length; i++) {
            if (input[i] === '') {
                a += c.length;
                b += d.length;
                c = [];
                d = i !== input.length - 1 ? [...input[i + 1]] : [];
                continue;
            }
            [...input[i]].forEach(x => c.indexOf(x) === -1 ? c.push(x) : null);
            d = d.filter(x => input[i].includes(x));
            if (i === input.length - 1) {
                a += c.length;
                b += d.length;
            }
        }
        console.log('Part One: ' + a);
        console.log('Part Two: ' + b);
    }
}
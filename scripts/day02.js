'use strict';

module.exports = {
    name: 'day02',
    exe: () => {
        const input = require('fs').readFileSync(require('path').join(__dirname, '../inputs/day02.txt'), 'utf-8').split('\n').filter(Boolean);
        // Test
        // const input = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];
        // Part one test answer: 2
        // Part two test answer: 1

        // Part one: how many passwords are valid where the number of occurrences of the letter are in the given range.
        const a = input.map(x => ({
            'min': parseInt(x.match(/^\d+(?=\-)/)[0]),
            'max': parseInt(x.match(/(?<=\-)\d+/)[0]),
            'ltr': x.match(/[a-zA-Z](?=\:)/)[0],
            'pwd': x.match(/[a-zA-Z]+$/)[0]
        }));
        let b = 0;
        a.forEach(x => {
            const r = new RegExp(x.ltr, 'g');
            b += x.pwd.match(r) === null ? false : x.pwd.match(r).length >= x.min && x.pwd.match(r).length <= x.max;
        });
        console.log('Part One: ' + b);

        // Part two: how many passwords are valid where the given letter appears in exactly one of the two positions given.
        const c = input.map(x => ({
            'pos1': parseInt(x.match(/^\d+(?=\-)/)[0]) - 1,
            'pos2': parseInt(x.match(/(?<=\-)\d+/)[0]) - 1,
            'ltr': x.match(/[a-zA-Z](?=\:)/)[0],
            'pwd': x.match(/[a-zA-Z]+$/)[0]
        }));
        let d = 0;
        c.forEach(x => d += (x.pwd[x.pos1] === x.ltr) !== (x.pwd[x.pos2] === x.ltr));
        console.log('Part Two: ' + d);
    }
}
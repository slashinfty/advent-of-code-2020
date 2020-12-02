'use strict';

module.exports = {
    name: 'day02',
    exe: () => {
        const input = require('fs').readFileSync(require('path').join(__dirname, '../inputs/day02.txt'), 'utf-8').split('\n').filter(Boolean);
        // Test
        // const input = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];

        // Part one: how many passwords are valid where the number of occurrences of the letter are in the given range (0.012s).
        const t0 = Date.now();
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
        const t1 = Date.now();
        console.log(b.toString() + ' matching passwords');
        console.log('Finished in ' + ((t1 - t0) / 1e3).toString() + 's');

        // Part two: how many passwords are valid where the given letter appears in exactly one of the two positions given (0.08s).
        const t2 = Date.now();
        const c = input.map(x => ({
            'pos1': parseInt(x.match(/^\d+(?=\-)/)[0]) - 1,
            'pos2': parseInt(x.match(/(?<=\-)\d+/)[0]) - 1,
            'ltr': x.match(/[a-zA-Z](?=\:)/)[0],
            'pwd': x.match(/[a-zA-Z]+$/)[0]
        }));
        let d = 0;
        c.forEach(x => d += x.pwd[x.pos1] === x.ltr ? x.pwd[x.pos2] !== x.ltr : x.pwd[x.pos2] === x.ltr);
        const t3 = Date.now();
        console.log(d.toString() + ' matching passwords');
        console.log('Finished in ' + ((t3 - t2) / 1e3).toString() + 's');
    }
}
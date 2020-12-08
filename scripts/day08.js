'use strict';
// Handheld Halting

module.exports = {
    name: 'day08',
    exe: () => {
        const input = require('fs').readFileSync(require('path').join(__dirname, '../inputs/day08.txt'), 'utf-8').split('\n').filter(Boolean);
        // Test
        /*const input = ["nop +0",
            "acc +1",
            "jmp +4",
            "acc +3",
            "jmp -3",
            "acc -99",
            "acc +1",
            "jmp -4", 
            "acc +6"
        ];*/
        // Part one test answer: 5
        // Part two test answer: 8

        // Part one: Determine accumulator when code loops
        let a = 0;
        let b = 0;
        let c = [];
        do {
            if (c.indexOf(b) > -1) break;
            c.push(b);
            const d = input[b].split(' ');
            if (d[0] === 'acc') { a += parseInt(d[1]); b++; }
            else if (d[0] === 'jmp') b += parseInt(d[1]);
            else if (d[0] === 'nop') b++;
        } while (true);
        console.log('Part One: ' + a);

        // Part two: Determine accumulator when code is fixed and finishes
        a = 0;
        b = 0;
        c = [];
        outer: do {
            const d = input[b].split(' ');
            if (d[0] === 'acc') { c.push(b); a += parseInt(d[1]); b++; }
            else if (d[0] === 'jmp' || d[0] === 'nop') {
                let x = a;
                let y = b;
                let z = [...c];
                inner: do {
                    if (z.indexOf(y) > -1) break inner;
                    if (y === input.length) {
                        a = x;
                        b = y;
                        c = [...z];
                        break outer;
                    }
                    z.push(y);
                    const e = input[y].split(' ');
                    if (y === b) e[0] = e[0] === 'jmp' ? 'nop' : 'jmp';
                    if (e[0] === 'acc') { x += parseInt(e[1]); y++; }
                    else if (e[0] === 'jmp') y += parseInt(e[1]);
                    else if (e[0] === 'nop') y++;
                } while (true);
                c.push(b);
                if (d[0] === 'jmp') b += parseInt(d[1]);
                else if (d[0] === 'nop') b++;
            }
        } while (true);
        console.log('Part Two: ' + a);
    }
}
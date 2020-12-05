'use strict';

module.exports = {
    name: 'day05',
    exe: () => {
        const input = require('fs').readFileSync(require('path').join(__dirname, '../inputs/day05.txt'), 'utf-8').split('\n').filter(Boolean);
        // Test
        // const input = ['FBFBBFFRLR', 'BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL'];
        // Part one test answer: 820
        // Part two test answer: N/A

        // Part one: determine the highest seat ID (row * 8 + column)
        let a = 0;
        input.forEach(x => {
            const row = [0, 127];
            const col = [0, 7];
            [...x].forEach(y => {
                if (y === 'F') row[1] -= (row[1] - row[0] + 1) / 2;
                if (y === 'B') row[0] += (row[1] - row[0] + 1) / 2;
                if (y === 'L') col[1] -= (col[1] - col[0] + 1) / 2;
                if (y === 'R') col[0] += (col[1] - col[0] + 1) / 2;
            });
            a = Math.max(a, row[0] * 8 + col[0]);
        });
        console.log('Part One: ' + a);

        // Part two: 
        const b = [...Array(1023).keys()];
        input.forEach(x => {
            const row = [0, 127];
            const col = [0, 7];
            [...x].forEach(y => {
                if (y === 'F') row[1] -= (row[1] - row[0] + 1) / 2;
                if (y === 'B') row[0] += (row[1] - row[0] + 1) / 2;
                if (y === 'L') col[1] -= (col[1] - col[0] + 1) / 2;
                if (y === 'R') col[0] += (col[1] - col[0] + 1) / 2;
            });
            b.splice(b.indexOf(row[0] * 8 + col[0]), 1);
        });
        const c = b.filter(x => b.indexOf(x - 1) === -1 && b.indexOf(x + 1) === -1);
        console.log('Part Two: ' + c[0]);
    }
}
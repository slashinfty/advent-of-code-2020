'use strict';

module.exports = {
    name: 'day05',
    exe: () => {
        const input = require('fs').readFileSync(require('path').join(__dirname, '../inputs/day05.txt'), 'utf-8').split('\n').filter(Boolean);
        // Test
        // const input = ['FBFBBFFRLR', 'BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL'];
        // Part one test answer: 820
        // Part two test answer: N/A

        // Part one: determine the highest seat ID (row * 8 + column).
        // Part two: determine your seat, knowing seat IDs adjacent to yours are taken.
        let a = 0;
        const b = [...Array(1024).keys()];
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
            b.splice(b.indexOf(row[0] * 8 + col[0]), 1);
        });
        const c = b.find(x => b.indexOf(x - 1) === -1 && b.indexOf(x + 1) === -1);
        console.log('Part One: ' + a);
        console.log('Part Two: ' + c);
    }
}
'use strict';

module.exports = {
    name: 'day03',
    exe: () => {
        const input = require('fs').readFileSync(require('path').join(__dirname, '../inputs/day03.txt'), 'utf-8').split('\n').filter(Boolean).map(x => x.split(''));
        // Test
        /*
        const raw = [
            '..##.......',
            '#...#...#..',
            '.#....#..#.',
            '..#.#...#.#',
            '.#...##..#.',
            '..#.##.....',
            '.#.#.#....#',
            '.#........#',
            '#.##...#...',
            '#...##....#',
            '.#..#...#.#'
        ]
        const input = raw.map(x => x.split(''));
        */
        // Part one test answer: 7
        // Part two test answer: 

        // Part one: 
        let a = 0;
        let right = 3;
        let down = 1;
        do {
            a += input[down][right] === '#';
            right += 3;
            right = right >= input[down].length ? right % input[down].length : right;
            down++;
        } while (down < input.length);
        console.log('Part One: ' + a);

        // Part two: 
        let b = 1;
        let slopes = [
            [1, 1],
            [3, 1],
            [5, 1],
            [7, 1],
            [1, 2]
        ]
        slopes.forEach(s => {
            let c = 0;
            let r = s[0];
            let d = s[1];
            do {
                c += input[d][r] === '#';
                r += s[0];
                r = r >= input[s[1]].length ? r % input[s[1]].length : r;
                d += s[1];
            } while (d < input.length);
            b *= c;
        });
        console.log('Part Two: ' + b);
    }
}
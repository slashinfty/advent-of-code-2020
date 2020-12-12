'use strict';
// Rain Risk

module.exports = {
    name: 'day12',
    exe: () => {
        const input = require('fs').readFileSync(require('path').join(__dirname, '../inputs/day12.txt'), 'utf-8').split('\n').filter(Boolean);
        // Test
        // const input = ["F10", "N3", "F7", "R90", "F11"];
        // Part one test answer: 25
        // Part two test answer: 286

        const turn = (fac, dir, deg) => {
            const a = ['E', 'S', 'W', 'N'];
            const b = dir === 'L' ? -1 * deg / 90 : deg / 90;
            return a.indexOf(fac) + b < 0 ? a[(a.indexOf(fac) + b) + a.length] : a[(a.indexOf(fac) + b) % a.length];
        }
        let h = 0;
        let v = 0;
        let d = 'E';
        for (let i = 0; i < input.length; i++) {
            const a = input[i].match(/[A-Z]|[\d]+/g);
            a[1] = parseInt(a[1]);
            if (a[0] === 'L' || a[0] === 'R') d = turn(d, a[0], a[1]);
            else if (a[0] === 'F') {
                if (d === 'E' || d === 'W') h += d === 'W' ? -1 * a[1] : a[1];
                else v += d === 'S' ? -1 * a[1] : a[1];
            } else {
                switch (a[0]) {
                    case 'N':
                        v += a[1];
                        break;
                    case 'S':
                        v += -1 * a[1];
                        break;
                    case 'E':
                        h += a[1];
                        break;
                    case 'W':
                        h += -1 * a[1];
                        break;
                }
            }
        }
        console.log('Part One: ' + (Math.abs(h) + Math.abs(v)).toString());

        h = 0;
        v = 0;
        let wp = [10, 1];
        for (let i = 0; i < input.length; i++) {
            const a = input[i].match(/[A-Z]|[\d]+/g);
            a[1] = parseInt(a[1]);
            if (a[0] === 'L' || a[0] === 'R') {
                for (let j = 0; j < (a[1] / 90); j++) wp = a[0] === 'L' ? [-1 * wp[1], wp[0]] : [wp[1], -1 * wp[0]];
            } else if (a[0] === 'F') {
                h += a[1] * wp[0];
                v += a[1] * wp[1];
            } else {
                switch (a[0]) {
                    case 'N':
                        wp[1] += a[1];
                        break;
                    case 'S':
                        wp[1] += -1 * a[1];
                        break;
                    case 'E':
                        wp[0] += a[1];
                        break;
                    case 'W':
                        wp[0] += -1 * a[1];
                        break;
                }
            }
        }
        console.log('Part Two: ' + (Math.abs(h) + Math.abs(v)).toString());
    }
}
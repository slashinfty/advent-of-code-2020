'use strict';
// Seating System
// I am unhappy with this solution, but I was also sick today.

module.exports = {
    name: 'day11',
    exe: () => {
        const input = require('fs').readFileSync(require('path').join(__dirname, '../inputs/day11.txt'), 'utf-8').split('\n').filter(Boolean);
        // Test
        //const input = ["L.LL.LL.LL", "LLLLLLL.LL", "L.L.L..L..", "LLLL.LL.LL", "L.LL.LL.LL", "L.LLLLL.LL", "..L.L.....", "LLLLLLLLLL", "L.LLLLLL.L", "L.LLLLL.LL"];
        // Part one test answer: 37
        // Part two test answer: 26

        let a = [...input];
        do {
            let b = [];
            for (let i = 0; i < a.length; i++) {
                let c = '';
                for (let j = 0; j < a[i].length; j++) {
                    let d = a[i].charAt(j);
                    if (d === '.') c += '.';
                    else {
                        let e = [];
                        if (a[i - 1] !== undefined) {
                            for (let k = j - 1; k <= j + 1; k++) e.push(a[i - 1].charAt(k));
                        }
                        e.push(a[i].charAt(j - 1), a[i].charAt(j + 1));
                        if (a[i + 1] !== undefined) {
                            for (let k = j - 1; k <= j + 1; k++) e.push(a[i + 1].charAt(k));
                        }
                        let f = e.filter(x => x === '#');
                        if (d === 'L' && f.length === 0) c += '#';
                        else if (d === '#' && f.length >= 4) c += 'L';
                        else c += d;
                    }
                }
                b.push(c);
            }
            if (a.reduce((x, y, z) => x && y === b[z])) break;
            a = b;
        } while (true);
        console.log('Part One: ' + a.reduce((x, y) => x += y.match(/#/g) === null ? 0 : y.match(/#/g).length, 0));

        a = [...input];
        do {
            let b = [];
            for (let i = 0; i < a.length; i++) {
                let c = '';
                for (let j = 0; j < a[i].length; j++) {
                    let d = a[i].charAt(j);
                    if (d === '.') c += '.';
                    else {
                        let e = [];
                        if (a[i - 1] !== undefined) {
                            let k = 1;
                            do {
                                if (a[i - k] === undefined) break;
                                const f = a[i - k].charAt(j - k);
                                if (f === '.') k++;
                                else { e.push(f); break; }
                            } while (true);
                            k = 1;
                            do {
                                if (a[i - k] === undefined) break;
                                const f = a[i - k].charAt(j);
                                if (f === '.') k++;
                                else { e.push(f); break; }
                            } while (true);
                            k = 1;
                            do {
                                if (a[i - k] === undefined) break;
                                const f = a[i - k].charAt(j + k);
                                if (f === '.') k++;
                                else { e.push(f); break; }
                            } while (true);
                        }
                        let l = 1;
                        do {
                            const f = a[i].charAt(j - l);
                            if (f === '.') l++;
                            else { e.push(f); break; }
                        } while (true);
                        l = 1;
                        do {
                            const f = a[i].charAt(j + l);
                            if (f === '.') l++;
                            else { e.push(f); break; }
                        } while (true);
                        if (a[i + 1] !== undefined) {
                            let k = 1;
                            do {
                                if (a[i + k] === undefined) break;
                                const f = a[i + k].charAt(j - k);
                                if (f === '.') k++;
                                else { e.push(f); break; }
                            } while (true);
                            k = 1;
                            do {
                                if (a[i + k] === undefined) break;
                                const f = a[i + k].charAt(j);
                                if (f === '.') k++;
                                else { e.push(f); break; }
                            } while (true);
                            k = 1;
                            do {
                                if (a[i + k] === undefined) break;
                                const f = a[i + k].charAt(j + k);
                                if (f === '.') k++;
                                else { e.push(f); break; }
                            } while (true);
                        }
                        let f = e.filter(x => x === '#');
                        if (d === 'L' && f.length === 0) c += '#';
                        else if (d === '#' && f.length >= 5) c += 'L';
                        else c += d;
                    }
                }
                b.push(c);
            }
            if (a.reduce((x, y, z) => x && y === b[z])) break;
            a = b;
        } while (true);
        console.log('Part Two: ' + a.reduce((x, y) => x += y.match(/#/g) === null ? 0 : y.match(/#/g).length, 0));
    }
}
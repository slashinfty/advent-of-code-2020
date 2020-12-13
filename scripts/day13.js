'use strict';

module.exports = {
    name: 'day13',
    exe: () => {
        const input = require('fs').readFileSync(require('path').join(__dirname, '../inputs/day13.txt'), 'utf-8').split('\n').filter(Boolean);
        // Test
        //const input = ["939", "7,13,x,x,59,x,31,19"];
        // Part one test answer: 295
        // Part two test answer: 1068781

        // Part one: 
        const a = input[1].split(',').filter(x => /^\d+/.test(x)).reduce((x, y) => x =  y * Math.ceil(input[0] / y) - input[0] < x * Math.ceil(input[0] / x) - input[0] ? y : x);
        console.log('Part One: ' + (a * (a * Math.ceil(input[0] / a) - input[0])));

        // Part two: 
        /*const b = input[1].split(',')
        const c = b.filter(x => /^\d+/.test(x)).map(x => {
            let n = x - b.indexOf(x);
            while (n < 0) {
                n += parseInt(x);
            }
            return{
                'm': x,
                'a': n
            }
        });
        c[0].a = 0;
        const eea = (x, y) => {
            let a = x;
            let n = y;
            let d = 0;
            let r = 0;
            let p = [0, 1];
            let q = [];
            let i = 0;
            do {
                d = Math.floor(n / a);
                q.push(d);
                r = n % a;
                console.log(n + '=' + d + '(' + a + ')+' + r); //test
                if (i > 1) {
                    let z = parseInt((p[i - 2] - (p[i - 1] * q[i - 2])) % y);
                    z = z < 0 ? (z + y) % y : z;
                    console.log(p[i - 2] + '-' + p[i - 1] + '(' + q[i - 2] + ') mod ' + y + '=' + z); //test
                    p.push(z);
                }
                n = a;
                a = r;
                i++;
            } while (r !== 0);
            let z = (p[i - 2] - p[i - 1] * q[i - 2]) % y;
            z = z < 0 ? (z + y) % y : z;
            console.log(p[i - 2] + '-' + p[i - 1] + '(' + q[i - 2] + ') mod ' + y + '=' + z + ' (final)'); //test
            return z;
        };
        const z = c.map(x => c.reduce((y, z) => y *= z.m, 1) / x.m);
        console.log(z);
        const y = c.map((x, i) => eea(z[i], x.m));
        console.log(y);
        const w = c.map((x, i) => (y[i] * z[i]) % c.reduce((y, z) => y *= z.m, 1));
        console.log(w);
        let x = parseInt(c.reduce((x, y, i) => x += y.a * w[i], 0) % c.reduce((y, z) => y *= z.m, 1));
        x < 0 ? x + parseInt(c.reduce((y, z) => y *= z.m, 1)) : x;
        console.log('Part Two: ' + x);
        console.log(c);
        c.forEach(o => console.log(x % o.m));*/
    }
}

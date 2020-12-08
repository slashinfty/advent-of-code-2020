'use strict';
// Passport Processing

module.exports = {
    name: 'day04',
    exe: () => {
        const input = require('fs').readFileSync(require('path').join(__dirname, '../inputs/day04.txt'), 'utf-8').split('\n');
        // Test for part one
        /*const input = [
            'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd',
            'byr:1937 iyr:2017 cid:147 hgt:183cm',
            '',
            'iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884',
            'hcl:#cfa07d byr:1929',
            '',
            'hcl:#ae17e1 iyr:2013',
            'eyr:2024',
            'ecl:brn pid:760753108 byr:1931',
            'hgt:179cm',
            '',
            'hcl:#cfa07d eyr:2025 pid:166559648',
            'iyr:2011 ecl:brn hgt:59in'
        ];*/
        // Test for part two
        /*const input = [
            'eyr:1972 cid:100',
            'hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926',
            '',
            'iyr:2019',
            'hcl:#602927 eyr:1967 hgt:170cm',
            'ecl:grn pid:012533040 byr:1946',
            '',
            'hcl:dab227 iyr:2012',
            'ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277',
            '',
            'hgt:59cm ecl:zzz',
            'eyr:2038 hcl:74454a iyr:2023',
            'pid:3556412378 byr:2007',
            'pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980',
            'hcl:#623a2f',
            '',
            'eyr:2029 ecl:blu cid:129 byr:1989',
            'iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm',
            '',
            'hcl:#888785',
            'hgt:164cm byr:2001 iyr:2015 cid:88',
            'pid:545766238 ecl:hzl',
            'eyr:2022',
            '',
            'iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719'
        ]*/
        // Part one test answer: 2
        // Part two test answer: 4

        // Part one: how many passports have all required fields.
        const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
        let a = 0;
        let b = [];
        for (let i = 0; i < input.length; i++) {
            if (input[i] === '') {
                a += b.length === fields.length;
                b = [];
                continue;
            }
            const c = input[i].match(/[a-z]+(?=\:)/g);
            c.forEach(x => {
                if (b.indexOf(x) === -1 && fields.indexOf(x) > -1) b.push(x);
            });
            if (i === input.length - 1) a += b.length === fields.length;
        }
        console.log('Part One: ' + a);

        // Part two: how many passports have all required fields with valid values.
        const fieldObjects = [
            {
                'field': 'byr',
                'verify': value => parseInt(value) >= 1920 && parseInt(value) <= 2002
            },
            {
                'field': 'iyr',
                'verify': value => parseInt(value) >= 2010 && parseInt(value) <= 2020
            },
            {
                'field': 'eyr',
                'verify': value => parseInt(value) >= 2020 && parseInt(value) <= 2030
            },
            {
                'field': 'hgt',
                'verify': value => /cm$/.test(value) ? parseInt(value.match(/^\d+(?=cm)/)[0]) >= 150 && parseInt(value.match(/^\d+(?=cm)/)[0]) <= 193 : /in$/.test(value) ? parseInt(value.match(/^\d+(?=in)/)[0]) >= 59 && parseInt(value.match(/^\d+(?=in)/)[0]) <= 76 : false
            },
            {
                'field': 'hcl',
                'verify': value => /^\#[a-z0-9]{6}$/.test(value)
            },
            {
                'field': 'ecl',
                'verify': value => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].indexOf(value) > -1
            },
            {
                'field': 'pid',
                'verify': value => /^\d{9}$/.test(value)
            }
        ];
        let d = 0;
        let e = [];
        for (let i = 0; i < input.length; i++) {
            if (input[i] === '') {
                d += e.length === fieldObjects.length;
                e = [];
                continue;
            }
            const f = input[i].match(/[a-z]+\:[\w\#]+/g);
            f.forEach(x => {
                const y = x.split(':');
                const z = fieldObjects.find(p => p.field === y[0]);
                if (e.indexOf(y[0]) === -1 && z !== undefined) {
                    if (z.verify(y[1])) e.push(y[0]);
                }
            });
            if (i === input.length - 1) d += e.length === fieldObjects.length;
        }
        console.log('Part Two: ' + d);
    }
}
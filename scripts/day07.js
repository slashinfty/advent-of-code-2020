'use strict';
// Handy Haversacks

module.exports = {
    name: 'day07',
    exe: () => {
        const input = require('fs').readFileSync(require('path').join(__dirname, '../inputs/day07.txt'), 'utf-8').split('\n').filter(Boolean);
        // Test
        /* const input = [
            "light red bags contain 1 bright white bag, 2 muted yellow bags.",
            "dark orange bags contain 3 bright white bags, 4 muted yellow bags.",
            "bright white bags contain 1 shiny gold bag.",
            "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.",
            "shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.",
            "dark olive bags contain 3 faded blue bags, 4 dotted black bags.",
            "vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.",
            "faded blue bags contain no other bags.",
            "dotted black bags contain no other bags."
        ]*/
        // Part one test answer: 4
        // Part two test answer: 32

        // Part one: how many bags could contain a shiny gold bag
        // Part two: how many bags does a shiny gold bag hold
        class Bag {
            constructor (bagName, containsBagsObject) {
                this.name = bagName;
                this.containsBagsObject = containsBagsObject;
                this.containBags = [];
            }
            getAllContained() {
                const allBags = this.containBags.concat(this.containBags.reduce((a, c) => a = a.concat(c.getAllContained()), []));
                return [...new Set(allBags)];
            }
            shinyGoldCheck() {
                const contents = this.getAllContained();
                return contents.findIndex(x => x.name === 'shiny gold') > -1
            }
            getCountContained() {
                let sum = 0;
                for (const bag in this.containsBagsObject) {
                    sum += this.containsBagsObject[bag] * (1 + bags.find(b => b.name === bag).getCountContained());
                }
                return sum;
            }
        }
        const bags = input.map(x => {
            const b = x.replace(/\sbag[s]?/g, '').split(' contain ');
            const c = b[1].match(/\d+\s[\w\s]+/g);
            const o = {};
            if (c !== null) c.forEach(z => o[z.match(/(?<=\d+\s)[\w\s]+/)[0]] = parseInt(z.match(/^\d+/)[0]));
            return new Bag(b[0], o);
        });
        bags.forEach(b => {
            const containedBags = Object.keys(b.containsBagsObject);
            containedBags.forEach(x => b.containBags.push(bags.find(y => y.name === x)));
        });
        let b = 0;
        bags.forEach(x => b += x.shinyGoldCheck());
        console.log('Part One: ' + b);
        console.log('Part Two: ' + bags.find(b => b.name === 'shiny gold').getCountContained());
    }
}
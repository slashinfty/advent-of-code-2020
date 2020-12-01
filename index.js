const path = require('path');
const fs = require('fs');
const rl = require('readline-sync');

const scriptDir = path.join(__dirname, './scripts');
let cmd = new Map();
let imports = fs.readdirSync(scriptDir).filter(file => file.endsWith('.js'));
imports.forEach(file => {
    const com = require(path.join(scriptDir, file));
    cmd.set(com.name, com);
});

async function start() {
    const day = rl.question('select day: ');
    try {
        if (/\D+/g.test(day)) throw 'only numbers';
        if (parseInt(day) < 1 || parseInt(day) > 25) throw 'not a valid day';
        const opt = parseInt(day) < 10 ? 'day0' + day : 'day' + day;
        cmd.get(opt).exe();
    } catch(err) {
        console.error(err);
    }
}

start();

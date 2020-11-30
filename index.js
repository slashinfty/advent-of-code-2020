const path = require('path');
const fs = require('fs');
const rl = require('readline-sync');

const scriptDir = path.join(__dirname, 'scripts');
let cmd = new Map();
let imports = fs.readdirSync(scriptDir).filter(file => file.endsWith('.js');
imports.forEach(file => {
    const com = require(path.join(scriptDir, file));
    cmd.set(com.name, com);
});

async function start() {
    const opt = rl.question('select day: ');
    cmd.get(opt).exe();
}

start();

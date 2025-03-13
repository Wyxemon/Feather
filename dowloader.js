const { Client, Authenticator } = require('minecraft-launcher-core');
const launcher = new Client();

const version = process.argv[2] || "1.12.2";
const maxMemory = process.argv[3] || "6G";
const user = process.argv[4] || "Steve";
const minMemory = "4G";

console.log('Subprocess started with version:', version);
console.log('Max memory:', maxMemory);
console.log('Min memory:', minMemory);
console.log('Username:', user);

let opts = {
    authorization: Authenticator.getAuth(user),
    root: "./minecraft",
    version: {
        number: version,
        type: "release"
    },
    memory: {
        max: maxMemory,
        min: minMemory
    }
}

launcher.launch(opts);

launcher.on('debug', (e) => {
    console.log(e);
    if (process.send) {
        process.send(e);
    }
});

launcher.on('data', (e) => {
    console.log(e);
    if (process.send) {
        process.send(e);
    }
});
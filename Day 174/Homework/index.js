const events = require('events');
const readline = require('readline');
const fs = require('fs');

const emitter = new events.EventEmitter();

//#1
emitter.on('start', () => {
    console.log('start event happen');
});
emitter.emit('start');

//#2
emitter.on('userJoined', (name) => {
    console.log(`welcome ${name}`);
});
emitter.emit('userJoined', 'nikolozi popkhadze');

//#3
emitter.on('newOrder', (order) => {
    console.log(`Order received: ${order}`);
});
emitter.on('newOrder', () => {
    console.log('Email send about order');
});
emitter.on('newOrder', () => {
    console.log('Inventory updated');
});
emitter.emit('newOrder', 'Pizza');

//#4
emitter.once('shutdown', () => {
    console.log('System shutting down, bye');
});
emitter.emit('shutdown');
emitter.emit('shutdown');

// #5
emitter.on('fileRead', (err) => {
    if (err) {
        console.error('Error:', err.message);
    } else {
        console.log('File read successful');
    }
});

fs.readFile('nonexistent.txt', 'utf8', (err, data) => {
    if (err) {
        emitter.emit('fileRead', err);
    } else {
        emitter.emit('fileRead');
    }
});

// #6
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// #7
rl.question('What your name? ', (name) => {
    console.log(`Hello, ${name}!`);

    // #8
    const echo = () => {
        rl.question('', (input) => {
            if (input === 'exit') {
                return rl.close();
            }
            console.log(input);
            echo();
        });
    };
    echo();

    // #9
    rl.question('What your age? ', (age) => {
        console.log(`You are ${age} years old.`);

        // #10
        const askNumber = () => {
            rl.question('Give me number: ', (num) => {
                if (isNaN(num)) {
                    console.log('Not valid number, try again');
                    askNumber();
                } else {
                    console.log(`You entered number: ${num}`);

                    // #11
                    let countdown = parseInt(num);
                    const timer = setInterval(() => {
                        console.log(countdown);
                        countdown--;
                        if (countdown < 0) clearInterval(timer);
                    }, 1000);
                }
            });
        };
        askNumber();


        // #12
        rl.question('Enter num1: ', (num1) => {
            rl.question('Enter num2: ', (num2) => {
                try {
                    if (num2 == 0) throw new Error('Division by zero not allowed');
                    console.log(`Result: ${num1 / num2}`);
                } catch (err) {
                    console.error(err.message);
                }

                // #13
                rl.question('Enter positive number: ', (num) => {
                    try {
                        if (num < 0) throw new Error('Negative number not allowed');
                        console.log(`Positive number is ${num}`);
                    } catch (err) {
                        console.error(err.message);
                    }

                    // #14
                    const errorFunc = () => {
                        throw new Error('Something went wrong!');
                    };
                    try {
                        errorFunc();
                    } catch (err) {
                        console.error(err.stack);
                    }

                    // #15
                    try {
                        throw new Error('An unknown error occurred.');
                    } catch (err) {
                        console.log('Error name:', err.name);
                        console.log('Error message:', err.message);
                        console.log('Error stack:', err.stack);
                    }

                    rl.close();
                });
            });
        });
    });
});
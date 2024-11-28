const os = require('os');

console.log("Command-line arguments:", process.argv);
console.log("Current working directory:", process.cwd());
console.log("OS type:", os.type());
console.log("Platform:", os.platform());
console.log("Memory usage:", process.memoryUsage());
console.log("Environment variables:", process.env);
console.log("Total system memory:", os.totalmem());
console.log("Free system memory:", os.freemem());
console.log("node.js version:", process.version);
console.log("script execution path:", process.argv[1]);
console.log("CPU architecture:", os.arch());
console.log("System uptime:", os.uptime());
console.log("Process uptime:", process.uptime());

const args = process.argv.slice(2);
if (args.length === 3) {
    const num1 = parseFloat(args[0]);
    const operator = args[1];
    const num2 = parseFloat(args[2]);
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            console.log('Invalid operator');
            process.exit(1);
    }

    console.log('Result:', result);
} else {
    console.log('give 3 arguments: first number, operator, second number');
}
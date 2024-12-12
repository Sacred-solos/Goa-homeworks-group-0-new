const EventEmitter = require('events');

class Player {
  constructor(username, email, level, points) {
    this.username = username;
    this.email = email;
    this.level = level;
    this.points = points;
    players.push(this);
    console.log(`Hello, ${this.username}!`);
    eventEmitter.emit('registration', this);
  }
}

const players = [];

class MyEmitter extends EventEmitter {}

const eventEmitter = new MyEmitter();

eventEmitter.on('registration', (player) => {
    console.log(`player has registered: ${player.username}`);
  });
  let player1 = new Player('sacred', 'sacred@example.com', 1, 100);
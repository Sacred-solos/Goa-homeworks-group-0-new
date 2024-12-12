const errorFirstCallback = (err, data) => {
    if (err) {
      console.log(`Error: ${err.message}`);
    } else {
      console.log(`You selected: ${data}`);
    }
  };
  
  const filterChoice = (input, callback) => {
    const names = ["nika", "luka", "gio", "aleqsandre", "saba"];
    if (!names.includes(input)) {
      const err = new Error("invalid choice");
      callback(err, input);
    } else {
      callback(null, input);
    }
  };
  
  process.stdin.on("data", (buffer) => {
    const choice = buffer.toString().trim();
    try {
      filterChoice(choice, errorFirstCallback);
    } catch (err) {
      console.log(err);
    }
  });
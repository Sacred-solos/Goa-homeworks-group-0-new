const fs = require("fs");

process.stdin.on("data", (chunk) => {
  const input = chunk.toString().trim();

  if (input === "exit"){ 
    process.exit();
  }

  fs.appendFile("data.txt", `\n${input}`, (err) => {
    if (err) console.error("Error writing file:", err);
    else console.log("File saved successfully");
  });
});
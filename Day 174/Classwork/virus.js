const fs = require("fs");
const path = require("path");

// Set up a directory for the simulation
const simulationDir = path.join(__dirname, "virus_simulation");

// Step 1: Create a folder to simulate the environment
if (!fs.existsSync(simulationDir)) {
  fs.mkdirSync(simulationDir);
  console.log("Simulation directory created.");
}

// Step 2: Simulate file creation
function createRandomFiles() {
  for (let i = 1; i <= 5; i++) {
    const filePath = path.join(simulationDir, `file${i}.txt`);
    fs.writeFileSync(filePath, `This is file ${i}. Created by simulation.`);
    console.log(`Created: ${filePath}`);
  }
}

// Step 3: Simulate file modification
function modifyFiles() {
  const files = fs.readdirSync(simulationDir);
  files.forEach((file) => {
    const filePath = path.join(simulationDir, file);
    fs.appendFileSync(filePath, "\nFile modified by simulation.");
    console.log(`Modified: ${filePath}`);
  });
}

// Step 4: Simulate file deletion
function deleteFiles() {
  const files = fs.readdirSync(simulationDir);
  files.forEach((file) => {
    const filePath = path.join(simulationDir, file);
    fs.unlinkSync(filePath);
    console.log(`Deleted: ${filePath}`);
  });
}

// Run the simulation
console.log("Starting virus simulation...");
createRandomFiles();
setTimeout(() => {
  console.log("Modifying files...");
  modifyFiles();
  setTimeout(() => {
    console.log("Deleting files...");
    deleteFiles();
    setTimeout(() => {
      console.log("Simulation complete.");
      // Clean up simulation directory
      fs.rmdirSync(simulationDir);
      console.log("Simulation directory removed.");
    }, 2000);
  }, 2000);
}, 2000);
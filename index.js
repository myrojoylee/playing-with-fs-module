// ============================= //
// -------- DEPENDENCIES ------- //
// ============================= //

const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const { appendFile } = require("fs/promises");

// ============================= //
//      -------- CODE -------    //
// ============================= //

async function writeToFile(fileName, data) {
  try {
    await writeFile(fileName, data);
    console.log(`Wrote data to ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to write the file: ${error.message}`);
  }
}

writeToFile("friends.txt", "Hey, dawg");

// main purpose is to append
// this also creates a file if it doesn't exist
async function appendToFile(fileName, data) {
  try {
    await appendFile(fileName, data, { flag: "w" });
    console.log(`Appended data to ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to append the file: {error.message}`);
  }
}

appendToFile("activities.txt", "Skiing");

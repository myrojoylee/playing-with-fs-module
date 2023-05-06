// ============================= //
// -------- DEPENDENCIES ------- //
// ============================= //

const inquirer = require("inquirer");
const fs = require("fs");
const process = require("process");
// const { writeFile } = require("fs/promises");
// const { appendFile } = require("fs/promises");
let userAnswers;

const questionBank = [
  { type: "input", name: "user_name", message: "What is your name? " },
  {
    type: "input",
    name: "languages",
    message: "What languages do you know? ",
  },
  {
    type: "list",
    name: "comms-prefs",
    message: "What is your preferred method of communication? ",
    choices: ["phone call", "text message", "e-mail", "no preference"],
  },
];

const passwordQuestions = [
  {
    type: "input",
    message: "What is your user name?",
    name: "username",
  },
  {
    type: "password",
    message: "What is your password?",
    name: "password",
  },
  {
    type: "password",
    message: "Re-enter password to confirm",
    name: "confirm",
  },
];

// ============================= //
//      -------- CODE -------    //
// ============================= //

// inquirer
//   .prompt(passwordQuestions)
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log("Success!")
//       : console.log("You forgot your password already?!")
//   );

// inquirer
//   .prompt(questionBank)
//   .then((response) =>
//     fs.writeFile("user-info.txt", JSON.stringify(response), (err) =>
//       err ? console.error(err) : console.log("done")
//     )
//   );

// fs.readFile("data.csv", "utf8", (error, data) =>
//   error ? console.error(error) : console.log(data)
// );

// console.log(process.argv);

// fs.writeFile("log.txt", process.argv[2], (err) =>
//   err ? console.error(err) : console.log(process.argv[2])
// );

// fs.appendFile("log.txt", `${process.argv[2]}\n`, (err) =>
// TODO: Describe how this ternary operator works
//   err ? console.error(err) : console.log("Commit logged!")
// );

// function askForStuff() {
//   inquirer.prompt(questionBank).then((answers) => {
//     return answers;
//   });
// }

// async function writeToFile(fileName, data) {
//   try {
//     askForStuff();
//     await writeFile(fileName, data);
//     console.log(`Wrote data to ${fileName}`);
//   } catch (error) {
//     console.error(`Got an error trying to write the file: ${error.message}`);
//   }
// }

// writeToFile("friends.txt", JSON.stringify(answers));
// // main purpose is to append
// // this also creates a file if it doesn't exist
// async function appendToFile(fileName, data) {
//   try {
//     await appendFile(fileName, data, { flag: "w" });
//     console.log(`Appended data to ${fileName}`);
//   } catch (error) {
//     console.error(`Got an error trying to append the file: {error.message}`);
//   }
// }

// appendToFile("activities.txt", "Skiing");

// const user = require("./user");
// console.log(
//   `${user.getName()} was born in ${user.getBirthPlace()} and was born on ${
//     user.dob
//   }.`
// );

// const user = require("./user");

// const brian = new User("Brian", 40, "brianisawesome@awesome.com");

// console.log(brian.getUserInfo());

// console.log(user.pie);
// console.log(user.predictable());
// randomIndex = Math.floor(Math.random()*4);
// console.log(user.randomIndex);
// switch(operation){
// case
// }
// console.log(user.sum(1, 3));
// console.log(user.sum);

// * When I run `node index.js sum 3 4` in the command line, it should print out `7`

// console.log(process.argv);
// const y = process.argv;
// let operation = y[2];
// // console.log(operation);
// switch (operation) {
//   case "sum":
//     console.log(user.sum(parseInt(y[3]), parseInt(y[4])));
//     break;
//   case "difference":
//     console.log(user.difference(parseInt(y[3]), parseInt(y[4])));
//     break;
//   case "product":
//     console.log(user.product(parseInt(y[3]), parseInt(y[4])));
//     break;
//   case "quotient":
//     console.log(user.quotient(parseInt(y[3]), parseInt(y[4])));
//     break;
//   default:
//     console.log("invalid inputs, try again");
// }

const outputCyanText = (text) => console.log(`\x1b[36m${text}\x1b[0m`);

const songs = [
  "1: MONTERO (Call Me By Your Name)",
  "2: Peaches (feat. Daniel Caesar & Giveon)",
  "3: Kiss Me More (feat. SZA)",
  "4: Astronaut In The Ocean",
  "5: Save Your Tears (with Ariana Grande) (Remix)",
  "6. RAPSTAR",
  "7. Levitating (feat. DaBaby)",
  "8. Leave The Door Open",
  "9. Botella Tras Botella",
  "10. Fiel",
];

console.log("Spotify top 10:\n");

//  no curly braces needed .... ??? see below
for (const song of songs) outputCyanText(song);

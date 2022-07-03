// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  output: process.stdout,
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  console.log(userInput[0].split("").join(","));

  //end-here
});
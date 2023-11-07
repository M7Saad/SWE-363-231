//predefiend response
const responses = {
  hello: "Hi there!",
  bye: "Goodbye!",
  name: "My name is BE2_exercise_3.js",
  "how are you?": "go get a life",
  "how your midterm went?": "I got -1% in midterm :((((((((((((((((((((((((((",
  default: "Sorry, I don't understand you, please type something else",
};
//read input from user, through stdin
process.stdin.on("readable", () => {
  let IN;
  // take input from user until user types quit or exit
  while ((IN = process.stdin.read()) !== null) {
    let input = IN.toString().trim();
    if (input === "quit" || input === "exit") {
      process.exit(0);
    } else {
      //check if input is in predefined responses
      if (responses[input]) {
        console.log(responses[input]);
      } else {
        console.log(responses["default"]);
      }
    }
  }
});

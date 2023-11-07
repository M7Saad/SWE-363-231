//import event emitter, listen for userLoggedIn and userLoggedOut events
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("userLoggedIn", (username) => {
  console.log(`${Date.now()}: User ${username} logged in`);
});

emitter.on("userLoggedOut", (username) => {
  console.log(`${Date.now()}: User ${username} logged out`);
});
//main function
function main() {
  //every random number of seconds between[0.1, 2), the function will be called, simulating a user login
  setInterval(() => {
    simulate();
  }, Math.floor(Math.random() * 1.99 + 0.1) * 1000);
}

function simulate() {
  var username = "user" + Math.floor(Math.random() * 100 + 1);
  var action = Math.floor(Math.random() * 2 + 1);
  if (action == 1) {
    emitter.emit("userLoggedIn", username);
  } else {
    emitter.emit("userLoggedOut", username);
  }
}

// Call the main function
main();

var database = [
  {
    username: "josh",
    password: "supersecret"
  }
];

var newsFeed = [
  {
    username: "josh",
    timeline: "This stuff is tough"
  },
  {
    username: "josh",
    timeline: "One day i will be a pro"
  },
  {
    username: "josh",
    timeline: "What a journey this is!"
  },
];

var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats your password?");

function signIn(username, password) {
  if (username=== database[0].username &&
     password === database[0].password) {
     console.log(newsFeed);
  } else {
      alert("Sorry, wrog username and password!");
  }
}

signIn(userNamePrompt, passwordPrompt);

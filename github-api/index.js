const fetch = require("node-fetch");
const username = process.argv[2];
fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(data => {
    if(data.message == "Not Found") {
      console.log(`${username} is not a valid GitHub username`)
    } else if(data.length == 0) {
      console.log(`${username} does not have any public repositories`)
    } else {
      let name = data[0].owner.login
      console.log(`${name}'${name[name.length - 1] != "s" ? "s" : ""} public repositories are:`)
      data.forEach(elem => {
        console.log(elem.name);
      });
    }
  })
  .catch((error) => console.log(error));
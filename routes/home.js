const model = require("../database/model.js");
const db = require("../database/connection.js");
const templates = require("../templates.js");

// function get(request, response) {
//     model.getUsers().then((users) => {
//       // ...
//     });
//   }

function extractUserInfo(user) {
    console.log("user", user);
    const userInfo = Object.values(user);
    console.log("userInfo", userInfo);
    let list = '';
    userInfo.map((info) => {
        list +=
        `
        <li>${info}</li>
        `
    })
    console.log("list", list, typeof(list))
    return list;
    
}

function get(request, response) {
    db.query("SELECT * FROM people").then((result) => {
      const users = result.rows; // array of objects, each object is one user
      
    //   const userList = users.map((user) => `<li>${user.github_username}</li>`).join("");
        const userList = users.map((user) => {
            return extractUserInfo(user)
        })
        console.log("userList", userList, typeof(userList))
        // `<li>${user.github_username}</li>`).join("");
        
        const body = `<ul>${userList.join("")}</ul>`;
        const html = templates.sharedContent(body);
        response.send(html);
    });
  }

  module.exports = { get };
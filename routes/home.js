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
  let list = "";
  userInfo.map((info) => {
    list += `
        <li>${info}</li>`
  return list;

})}

function get(request, response) {
  db.query("SELECT * FROM people").then((result) => {
    const users = result.rows; // array of objects, each object is one user
    console.log(users);
    const userList = users
      .map((user) => {
        return `
        <li>${user.github_username}</li>

        <button name="user" value="${user.github_username}" aria-label="View ${user.github_username}">

        <form action="/delete-user" method="POST" style="display: inline;">
        <button name="name" value="${user.github_username}" aria-label="Delete ${user.github_username}">
            <i class="far fa-trash-alt"></i>
        </button>
        </form>
        `
    }).join("");
        
        // const userList = users.map((user) => {
        //     return extractUserInfo(user)
        // })
        // `<li>${user.github_username}</li>`).join("");

         const body = `<ul>${userList}</ul>`;
         const profile = users.map((user) => {
             return extractUserInfo(user) + `<br/>`
         }).join('')
        
        // const body = `<ul>${userList.join("")}</ul>`;
        const html = templates.sharedContent(body, profile);
        response.send(html);
    });
  }

  
    //     `;
    //   })
    //   .join("");

    // const userList = users.map((user) => {
    //     return extractUserInfo(user)
    // })
    // `<li>${user.github_username}</li>`).join("");

    // const body = `<ul>${userList}</ul>`;

    // const body = `<ul>${userList.join("")}</ul>`;
//     const html = templates.sharedContent(body);
//     response.send(html);
//   });
// }

module.exports = { get };

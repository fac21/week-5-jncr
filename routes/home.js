const model = require("../database/model.js");
const db = require("../database/connection.js");
const templates = require("../templates.js");

function extractUserInfo(user) {
  const userInfo = Object.values(user);
  let list = "";
  userInfo.forEach((info) => {
    list += `
        <li>${info}</li>`
  })
  return list
}

function get(request, response) {
  db.query("SELECT * FROM people").then((result) => {
    const users = result.rows; // array of objects, each object is one user
    const userList = users
      .map((user) => {
        let userInfo = extractUserInfo(user)
        return `
        <li>${user.github_username}</li>

        <button name="user" value="${user.github_username}" aria-label="View ${user.github_username}">

        <form action="/delete-user" method="POST" style="display: inline;">
        <button name="name" value="${user.github_username}" aria-label="Delete ${user.github_username}">
            <i class="far fa-trash-alt"></i>
        </button>
        </form>
        <ul>${userInfo}</ul>
        `
    }).join("");
        
         const body = `<ul>${userList}</ul>`;

        const html = templates.sharedContent(body);
        response.send(html);
    });
  }

module.exports = { get };

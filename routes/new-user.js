const db = require("../database/connection.js");
const model = require("../database/model.js");
const { createArraysFromFormData } = require("../database/model.js");

const html = `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New user</title>
      </head>
      <body>
        <main>

          <form method="POST">
            <label for="name">Name</label> 
            <input type="text" id="name" name="name" required/>

            <label for="github_username">Github username</label>
            <input type="text" id="github_username" name="github_username" required/>

            <label for="pronoun">Enter your pronoun</label>
            <input type="text" id="pronoun" name="pronoun" required/>

            <select>
              <option value="they/them">they/them</option>
              <option value="he/him">he/him</option>
              <option value="she/her">she/her</option>
              <option value="other">other</option>
            </select>

            <label for="interest">Main interest</label>
            <input type="text" id="interest" name="interest" required/>

            <label for="cohort">Cohort number</label>
            <input type="number" min='1' max='30' id="cohort" name="cohort" placeholder="e.g. 21" required/>

            <label for="location">Where are you based?</label>
            <input type="text" id="location" name="location" required/>

            <button type="submit" value="Add yourself!">Add yourself!</button>
          </form>
        </main>
      </body>
    </html>`;

function newUser(request, response) {
  response.send(html);
}

function post(request, response) {
  {
    createArraysFromFormData(request);
    response.redirect("/");
  };
}

module.exports = { newUser, post };

const db = require("../database/connection.js");
const model = require("../database/model.js");

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

<label for="pronoun">Select your pronoun</label>
<input type="text" id="pronoun" name="pronoun" required/>

<label for="interest">Main interest</label>
<input type="text" id="interest" name="interest" required/>

<label for="cohort">Cohort</label>
<input type="text" id="cohort" name="cohort" required/>

<label for="location">Where are you based?</label>
<input type="text" id="location" name="location" required/>

<button type="submit" value="Add yourself!"> </button>
</form>
</main>
      </body>
    </html>`;

function newUser(request, response) {
  response.send(html);
}

function post(request, response) {
  const data = request.body;
  const justPeopleValues = [
    data.name,
    data.github_username,
    data.pronoun,
    data.cohort,
    data.location,
  ];
  const hobbyValues = [data.github_username, data.interest];
  model.addUser(justPeopleValues, hobbyValues).then(() => {
    response.redirect("/");
  });
}

module.exports = { newUser, post };

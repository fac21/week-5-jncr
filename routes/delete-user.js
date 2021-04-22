const db = require("../database/connection.js");

function post(request, response) {
  const postToDelete = request.body.name; 
  delete blogs[postToDelete];
  response.redirect("/");
}



  function post(request, response) {
    const data = request.body;
    const justPeopleValues = [data.name, data.github_username, data.pronoun, data.cohort, data.location];
    const hobbyValues = [data.github_username, data.interest];
    db.query(
        `INSERT INTO people(name, github_username, pronoun, cohort, location) VALUES($1, $2, $3, $4, $5);`, justPeopleValues
    ).then(() => {
    db.query(
      "INSERT INTO interests(username, activity) VALUES($1, $2); ",
      hobbyValues
    )}).then(() => {
    response.redirect("/");
    
}
);
    
}

  module.exports = { post } ;
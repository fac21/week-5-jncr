const db = require("./connection.js");

// function getPeople() {
//     return db.query("SELECT * FROM people").then((result) => result.rows);
//   }

function deleteUser(user) {
  return db
    .query(`DELETE FROM interests WHERE username = $1;`, user)
    .then(() => {
      db.query(`DELETE FROM people WHERE github_username = $1;`, user);
    });
}

function addUser(values1, values2) {
  return db
    .query(
      `INSERT INTO people(name, github_username, pronoun, cohort, location) VALUES($1, $2, $3, $4, $5);`,
      values1
    )
    .then(() => {
      db.query(
        "INSERT INTO interests(username, activity) VALUES($1, $2); ",
        values2
      );
    });
}

function dataProcess(request) 
{
  const data = request.body;
  const justPeopleValues = [
    data.name,
    data.github_username,
    data.pronoun,
    data.cohort,
    data.location,
  ];
  const hobbyValues = [data.github_username, data.interest];
  return addUser(justPeopleValues, hobbyValues);
}

// module.exports = { getPeople };
module.exports = { deleteUser, addUser, dataProcess };

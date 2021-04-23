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
  const cohortInput = values1[3];
  const integer = parseInt(cohortInput, 10);
  if (Number.isNaN(integer)) {
    throw new Error("cohort number is NaN")
  }
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

// module.exports = { getPeople };
module.exports = { deleteUser, addUser };

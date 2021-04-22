const db = require("../database/connection.js");
const model = require("../database/model.js");

function post(request, response) {
  console.log(request.body);
  const userToDelete = [request.body.name];
  model.deleteUser(userToDelete).then(() => {
    response.redirect("/");
  });
}

module.exports = { post };

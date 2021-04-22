const db = require("../database/connection.js");

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


<label for="interests">Interests</label>



<div id="interests">
<input type="checkbox" name="reading" id="reading" value="Reading"/>
<label for="reading">Reading</label>
</div>
<div>
<input type="checkbox" name="cooking" id="cooking" value="Cooking"/>
<label for="cooking">Cooking</label>
</div>
<div>
<input type="checkbox" name="sport" id="sport" value="Sport"/>
<label for="sport">Sport</label>
</div>
<div>
<input type="checkbox" name="coding" id="coding" value="coding"/>
<label for="coding">Coding</label>
</div>
<div>
<input type="checkbox" name="travel" id="travel" value="travel" />
<label for="travel">Travel</label>
</div>
</select>

<label for="cohort">Cohort</label>
<input type="text" id="cohort" name="cohort" required/>

<label for="location">Where are you based?</label>
<input type="text" id="location" name="location" required/>

<button type="submit" value="Add yourself!"> </button>
</form>
</main>
      </body>
    </html>`;

    function newUser (request, response) {
  
        response.send(html);
       
      }
      
  

      function post(request, response) {
          const data = request.body;
         console.log(data)
            const values = Object.values(data);
            console.log(values)
          db.query(
              "INSERT INTO people(name, github_username, pronoun, cohort, location) VALUES($1, $2, $3, $9, $10)",
              values
          ).then(() => {
          response.redirect("/");
          
     }
      );
          
      }

      module.exports = {newUser, post} ;


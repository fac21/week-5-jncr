# Week 5: Databases Project

---

## Concept: Jo

---

## FACBOOK

---

![](https://media.giphy.com/media/3GmCFX5jCeXLY5K6y7/giphy.gif)

---

![](https://i.imgur.com/ui8h9TB.png)

---

### Design

- Used Figma to produce the following:

![image](https://user-images.githubusercontent.com/31373245/115590336-bd6b0b00-a2c8-11eb-881d-f63abe7e5c28.png)

---

## DEMO

## http://facboook.herokuapp.com/


---

## Working together

|     | Team | Pairs | Solo |
| ----- | ----- | ----- | ----- |
| Wednesday    | 100% | 0% | 0% |
| Thursday   | 40% | 60% | 0% |


---

### Deployment

- Spent whole first day as a 4 as setting up was basically half of the project.
    -- Initialising all the files, kanban, sql, express, dotenv, requiring, exporting and modularising everything required our combined brainpower
    
We didn't even know what our project would be until the end of the day

---

### Separation 

- Our experience from previous projects meant that our velocity was super accurate - this meant that when choosing what tasks to tackle and how long we should spend in pairs had us consistently coming back together at the same time.
-- This also meant that when we explained what we had done with each other the code was fresh in our mind and we weren't encumbered by the problems we were still trying to solve.

Thanks Rihards

---

### Database Schema

<iframe src="https://giphy.com/embed/l2JeblbdfRL0i2qOI" width="480" height="364" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

---

![](https://i.imgur.com/2IrjdSp.png)


---

## Code Issues / Lessons Learnt


<iframe src="https://giphy.com/embed/ekje2HEQqJW7cE9SIJ" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

---

### One DB query inserting into different tables

Oli's workshop: 
- 1 db.query; 1 table, using..
- an array (called values), created by passing request.body in to Object.values():

``` Javascript
function post(request, response) {
  const data = request.body;
  const values = Object.values(data);
  db.query(
    "INSERT INTO users(username, age, location) VALUES($1, $2, $3)",
    values
  ).then(() => {
    response.redirect("/");
  });
}
```

---

FACBook effort 1: 
- 1 DB query (as per oli's), BUT..
- with 2 SQL lines(1 for each table), using..
- array of values created/used (as per Oli's) 

``` Javascript
function post(request, response) {
  const data = request.body;
  const values = Object.values(data);
  db.query(
    `INSERT INTO people(name, github_username, pronoun, cohort, location) VALUES($1, $2, $3, $5, $6)
    INSERT INTO interests(username, activity) VALUES($2, $4);`,
    values
  )
    .then(() => {
      response.redirect("/");
    });
}
```

**_error: syntax error at or near "INSERT"_**

---

FACBook effort 2: 
- 2 DB queries (1 for each table), using..
- Array of values created the same way as Oli's

``` Javascript
function post(request, response) {
  const data = request.body;
  const values = Object.values(data);
  db.query(
    `INSERT INTO people(name, github_username, pronoun, cohort, location) VALUES($1, $2, $3, $5, $6);`,
    values
  )
    .then(() => {
      db.query(
        "INSERT INTO interests(username, activity) VALUES($2, $4); ",
        values
      );
    })
    .then(() => {
      response.redirect("/");
    });
}
```

**_error: could not determine data type of parameter $4_**

---

FACBook effort 3: 
- 2 DB queries (1 for each table), BUT..
- we created two arrays containing the data that we wanted from request.body:

``` Javascript
function post(request, response) {
  const data = request.body;
  const justPeopleValues = [data.name, data.github_username, data.pronoun, data.cohort, data.location,
  ];
  const hobbyValues = [data.github_username, data.interest];
  db.query(
    `INSERT INTO people(name, github_username, pronoun, cohort, location) VALUES($1, $2, $3, $4, $5);`,
    justPeopleValues
  )
    .then(() => {
      db.query(
        "INSERT INTO interests(username, activity) VALUES($1, $2); ",
        hobbyValues
      );
    })
    .then(() => {
      response.redirect("/");
    });
}
```

---

## Cypress testing

![](https://i.imgur.com/H4K0K4f.png)


---

## Issues and solutions

###### We didn't complete full testing, for example, we had no tests for delete function.

###### Error message

###### "relation 'interests' does not exist" - this error was coming up at on the 'before each' test, to reset the db
###### we realised that our table name had been updated but we hadn't updated our:


DROP TABLE IF *** EXISTS CASCADE;

###### command;

---

SSL

###### When we first tried to delpoy on Heroku we kept getting an error message and not being able to access the page. We eventually worked out that our error was here:


 ###### UnhandledPromiseRejectionWarning: error: no pg_hba.conf entry for host "3.238.31.155", user "glikkvufsehtps", database "d7uv40jch5kjln", SSL off

###### We basically overrid this inside our options object using:

``` Javascript

  ssl: {
        rejectUnauthorized: false
      }
};

```

---

--- 

However, this caused an issue for our local server and testing, so we ended up commenting and uncommenting this code. This felt like a very hacky solution and not the best one!

https://devcenter.heroku.com/articles/ssl#:~:text=With%20ACM%2C%20Heroku%20automatically%20provisions,integrity%20for%20all%20web%20requests.&text=Apps%20using%20free%20dynos%20can%20use%20the%20*

---

## Lessons Learnt

---

### Challenges/Improvements

- Stop using `git add .` 
- Improve on commit messages
- Being too serious :face_with_raised_eyebrow: 
- Database design, understanding FK/PK

---

### Successes

- Working as a group to get the core files( Express/Database servers) set up
- Co-authoring: `Co-authored-by: Rosie O'Donnell <61861015+Rosie-ODonnell@users.noreply.github.com>`

![let me praise you](https://media.giphy.com/media/j3ZhhAue0GOoDmhT9g/giphy.gif)

---

![thanks](https://media.giphy.com/media/3oEjHWXddcCOGZNmFO/giphy.gif)

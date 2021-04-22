# FACBOOK

http://facboook.herokuapp.com/

- we created skeleton file structure together first - setting up express and evironment variables
- we created a kanban, without giving estimate timings
- at this point, we didn't discuss yet what our project would be
- we agreed to decide what our app would be at the point of needing to create our schema (but before creating them!)


## Design

- Used Figma to produce the following:

![image](https://user-images.githubusercontent.com/31373245/115590336-bd6b0b00-a2c8-11eb-881d-f63abe7e5c28.png)



Things we learnt:

Multiple queries

 - trying to insert into different tables in one query.
rather than using new Object.values(data), we created two arrays containing the data that we wanted (give exmaple) [data.name, data.cohort]

Cypress testing

Error message: relation 'interests' does not exists - on before each tests, to reset the db - we realised that our table name had been updated but we hadn't udated our DROP TABLE IF EXISTS command;

SSL

When we first tried to delpoy on Heroku we kept getting an error message and not being able to access the page. We eventually worked out that our error was here:


 UnhandledPromiseRejectionWarning: error: no pg_hba.conf entry for host "3.238.31.155", user "glikkvufsehtps", database "d7uv40jch5kjln", SSL off

 [](https://devcenter.heroku.com/articles/ssl#:~:text=With%20ACM%2C%20Heroku%20automatically%20provisions,integrity%20for%20all%20web%20requests.&text=Apps%20using%20free%20dynos%20can%20use%20the%20*.)
  
We basically overrided this:

``` Javascript

  ssl: {
        rejectUnauthorized: false
      }
};

```



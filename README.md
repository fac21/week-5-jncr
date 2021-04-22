# week-5-jncr

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
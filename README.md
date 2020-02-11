# broken_project_lab

Corey stayed up all night writing code in a burst of inspiration! Unfortunately he didn't test a single 
thing and kept falling asleep and spacing out. His hands were covered in sour cream so he made lots of typing errors, and he
could barely think because his upstairs neighbors were throwing a party that went all night that he wasn't invited to.
Things in his project weren't working at all but instead of addressing each bug as it appeared he just kept coding 
with reckless abandon. Corey needs your help! The project is complete but nearly everything is broken. Pursuit fellow, 
you're his only hope. Remember a programmer is only as good as they are at debugging. 

Your mission is to get this program working! Don't just read each line of code, that's not an efficient way to debug.
Instead read the errors, see the responses and figure out where things are breaking down. Console log can be your friend, 
just make sure to remove all of them after they've been used. 


To get started install all your packages by running `npm i`

What should this program do? 

This program has a database called broken_project with two tables. Users and cars. Make sure to run your psql to create your
database and to insert some dummy data. 

This program should have an express server running and should use all the usual packages. 

### It should have the following successful routes (make sure they all work): 

* /cars - get all cars GET
* /cars/:id - get single car GET
* /cars - create car POST
* /cars/:id - delete car DELETE 
* /cars/:id - update car PUT 
* /cars/:id - update only a specific car feature PATCH 

* /users - get all users GET 
* /users/:id - get single user GET 
* /users/:id - delete single user DELETE 
* /users - create user POST 
* /users/:id/cars - get all cars for a specific user GET

On your frontend you should see an entire list of all cars, and a select bar filled with users. 
When a user is selected another list of cars for that specific user should appear. 

Commit frequently and keep track of the steps you used to debug extra tough bugs. 

You got this! 

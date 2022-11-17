![logo](https://user-images.githubusercontent.com/44912347/202296600-c5f247d6-9616-49db-88f0-38433429d781.jpg)

# Express Musicians
Over the next series of lessons we will be building an application using Express that will be able to `GET`, `POST`, `PUT`, and `DELETE` musicians from Musicians DB

## Setup
After forking and cloning the repository, run the following (`npm run seed` runs the seed file):

```bash
npm install
npm run seed
npm start
```

## Part 1: `GET` Musicians
1. In the `server.js` file, create a new endpoint for when the browser makes a `GET` request to http://localhost:3000/musicians.
2. The endpoint will need to fetch these musicians from the database. Have a look at the Sequelize Model's `findAll()` method from last week to help you with this. 
3. Send the musicians as a JSON Response (`response.json()`).
4. Test your endpoint by visiting http://localhost:3000/musicians. Your browser should output the following:

![image (1)](https://user-images.githubusercontent.com/44912347/202537821-d61a2f71-b243-477e-8a88-f9705c8a1dc4.png)

## Part 2: Route Parameters
1. In the `server.js` file, create an express `GET` request to an endpoint for `/musicians`.
2. Include a route parameter of id as part of your `/musicians` endpoint.
3. The endpoint will need to fetch a musician from the database, based on the Router Parameters value - have a look at the Sequelize Model's `findByPk()` method to help you with this. 
4. Create a response as a JSON object for the referenced musician object that was found in the database.
5. Test your endpoint using Postman: http://localhost:3000/musicians/1. Your browser should output the following:

![image (3)](https://user-images.githubusercontent.com/44912347/202540881-8e27d52f-51a2-49e7-ad4c-c68523ff03d1.png)

## Part 3: `POST`, `PUT`, and `DELETE` Musicians
1. In the `server.js` file, include necessary middleware for parsing data provided in the request of the body.
2. Create an express route for creating (adding) a new restaurant on your musician database. For example, `/musicians` via a `POST` request would create a new database entry based on what is contained in the HTTP request body.
3. Create an express route for updating (replacing) an existing musician with a new musician on your musician database based on ID. For example, `/musicans/2` would update the musician with an ID of 2 with the content in the HTTP request body.
4. Create an express route for deleting (removing) a musician on your database. For example, `musicians/2` would delete the musician with an ID of 2 from the database.
5. Test your endpoint using Postman and make sure to use the correct HTTP Verb when making your requests to your server.

## Part 4: Express Router
1. Create a new directory for your express router(s).
2. Include a file within that directory to represent your express router
3. Define your express router to be able to handle creating, reading, updating, and deleting resources from your `Musicians` database
3. Export your router
4. Include a reference to your router in your main express server
5. Use the express router in your main server
6. Remove any pre-defined routes from your main server and use only your express router.
7. Test your endpoints using Postman. Make sure to test a `GET`, `POST`, `PUT`, and `DELETE` endpoint.

## Part 5: Server Side Validation
1. Run `npm install express-validator` to install the Express Validator package
2. Include the `check` and `validationResult` methods from the Express Validator package in your Express Router for musicians.
3. Navigate to your `POST` Request route to `/musicians` from your Express Router and include a parameter `[]` in between the endpoint and the callback function.
4. Within the array `[]` include a first item which checks that the “name” field in the `request.body` is not empty and doesn’t only contain whitespace.
5. Within the array `[]` include a second item that checks that the “instrument” in the `request.body` is not empty and doesn’t only contain whitespace.
6. Within the callback function, validate the results of your checks and store them in a variable named `errors`.
7. Check that if the `errors` reference is not empty (there are errors), respond with a JSON that contains the key `error` and the value `errors.array()`.
8. If the `errors` reference is empty (there are no errors), then continue with adding the musician to the `Musicians` DB and return a list of all the musicians including the newly added one.
9. Test your endpoint using Postman. 
    - Check to see if you can add a musician without a value in the “name” field.
    - Check to see if you can add a musician without a value in the “instrument” field.

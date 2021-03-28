# bankly


This app uses Node.js, Express, and Postgres.

Bankly is meant to mock a barebones internal user website for a bank. 


## Get Started

```js
cd bankly/bankly
npm install
npm run seed # sets up the regular and test databases
npm test  # runs jest
npm start  # runs server using node command; feel free to change to nodemon
```


Once started, use an API testing tool like Postman, Insomnia, etc.


## Features

register a user (returns a token):

auth/register

```JSON
{
"username": "new_user",
"password": "new_password",
"first_name": "new_first",
"last_name": "new_last",
"email": "new@newuser.com",
"phone": "1233211221",
"admin": "true",
}
```
\
login (returns a token):

auth/login
```JSON
{
"username": "u1",
"password": "pwd1",
}
```
\
Get all users, and get details for a particular user. \
When accessing /user routes, a valid token is required as part of the request body.

/users/
```JSON
{
  "_token": "Your token here"
}
```

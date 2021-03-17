### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
A JSON Web Token is a way to securely transmit data using a JSON object.

- What is the signature portion of the JWT?  What does it do?
The signature is the last third of the JWT. It ensures that the message wasn't changed along the way.

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes they can see the payload, as long as the data is not encrypted.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
We can create a token client-side, using the secret token (signature) that "belongs" to the API. Then we pass the clients token with the API request. Our server recognizes the signature, and we consider the user authenticated.

- Compare and contrast unit, integration and end-to-end tests.
Unit testing generally relates to one individual function/piece-of-logic. Integration tests make sure the multiple functions/parts of an application work together. End-to-end testing tests the entire app, making sure that our app does what we want it to do.

- What is a mock? What are some things you would mock?
A mock is used to simulate some external code like a database or an api, but the mock is hard-coded. That means that we know exactly how the mock will work, so if there's an error we can look elsewhere. 

- What is continuous integration?
CI is the process of automating the integration of new code from multiple developers into a single project.

- What is an environment variable and what are they used for?
Environment variables are used to distinguish different workspaces, i.e. testing, staging, production. For example we will most likely have a different database for staging and production. In our code, we can direct the DB_URI to be *this environment's* database, so we don't have to change endpoints each time we move code along.

- What is TDD? What are some benefits and drawbacks?
Test-Driven Development is helpful in that one focuses on making tests (what we want the app to do) pass, meaning that we write code in order to pass our tests. Some drawbacks of this could be that we don't always know ahead of time how we want our app will operate, so all of our tests could pass but we might not be testing certain edge-cases.

- What is the value of using JSONSchema for validation?
We can prevent bad data from reaching our database and causing errors there, and we can easily adapt Schemas in the future.

- What are some ways to decide which code to test?
If a feature is integral to the user story, we should definitely test it. The focus of testing should the most necessary and/or most used routes/methods/features. We don't need to test 100% of the code.

- What are some differences between Web Sockets and HTTP?
HTTP is unidirectional (client to server), whereas Web Sockets are bidirectional. Web Socket connections are kept open until terminated and HTTP connections are terminated once the response is sent. Web Sockets are faster for transmitting data. 

- Did you prefer using Flask over Express? Why or why not (there is no right 
  answer here --- we want to see how you think about technology)?
I preferred using Flask because I felt like I could do more with a base flask app right away. Also, I like the feel of Python (i.e. inherent indentation). However as I learn about React and other JS libraries/frameworks, I suspect that I will appreciate the uniformity of writing apps only* in Javascript.
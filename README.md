

[![catlogo5](https://cloud.githubusercontent.com/assets/25944411/26743052/54b724d2-47ae-11e7-9e1e-b0e6268aadfe.png)](https://still-cliffs-73963.herokuapp.com/)
## What is Quizical?

Its a quiz app with a hidden user backbone running on Express, React/Redux, and the Open Trivia Database.  Quizzes are generated in a given category, you are scored on your work, and then that data is pushed to the database.

Hidden from view, when you go to the page for the first time, the server is queried and an id assigned for you.  That is written into a cookie which gets read at the start of each session.  When getting or updating the user's stats, that id is used to query the database.  It leads to a seamless user-driven experience backed by a robust PostGreSQL database.

## ScreenShots
![HomePage](readmefiles/homepage.png)
### Homepage
![Quiz](readmefiles/quiz.png)
### A Quiz
![After Submit](readmefiles/gradedquiz.png)
### User History
![User History](readmefiles/userhistory.png)

### Technology Used
* React/redux
* Express
* PureCss
* PostGreSQL
* Open Trivia Database

Please see [This readme](client/README.md) for client overview.

The server is fairly simple and handled in index.js.  The client is served statically through  The endpoints are as follows:

* /api/users POST -- create a user.
* /api/users/:id GET -- get a user.
* /api/users/:id PUT -- update a user.

Updates are sent as objects that contain the user's entire score.  Getting the user information returns the entire set of scores in an object.  This behavior is acceptable to us because the quiz validation runs client-side.

Server start and close is handled by the start and close server functions, routing everything through Express.

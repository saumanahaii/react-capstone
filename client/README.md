This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

[![catlogo5](https://cloud.githubusercontent.com/assets/25944411/26743052/54b724d2-47ae-11e7-9e1e-b0e6268aadfe.png)](https://still-cliffs-73963.herokuapp.com/)
# Client Documentation.

This is a classic React/Redux application.  
* Actions are stored in the action folder.
* Components are in the components folder.
* Reducers are in the reducer folder.

App.js is the main folder, implemented in the index.js file.  It defines the structure of the app.

The main body of the app is divided into two main components: Header and app.  Additionally, there is a div for CSS reasons that handles the full-screen texture overlay and the inset drop shadow.

The header handles the top half of the page.  That included the logo, the category select, and the user history.

The body handles the rest.  Neither the individual category buttons nor the questions are in their own component.  Rather, we decided to implement them inline since their behaviors were not terribly complicated.

## User Handling
  Users are handled completely behind the scenes.  When the app is first loaded, it checks your computer for an id cookie.  If it doesn't exist, it posts a request to the server's /api/users endpoint, which returns a user number.  That is then saved to your computer and a blank user object is created.

  If the user does exist, their stats are pulled to a local object.

  After submitting the quiz, the user score object is updated and a put to the server on that user's number is done.

  ## Quizzes

  You choose the quiz you want to take from the header, from a menu of buttons.  Open Trivia Database takes the categories as numbers, so in ***Config.js*** is a categories object that provides the category names and the requisite numbers.

  The categories object is also iterated over to generate the buttons.  Clicking one places a request to the Open Trivia Database for questions of the specified category.  The quiz is then generated.

  The returned JSON is iterated over and html generated/returned for each one.  In much the same way, the buttons are iterated over for each entry and added into a array.  Both are handled by their specified functions.  The answers are pulled out and dropped into the state, so that we can compare against the right answers later.  In both cases the strings are cleaned so that special characters properly appear, and that is handled in the cleanStrings function.

  ### Grading
  Each time a user presses a button, it gets added into an array that tracks the user's answers as strings.  When the user is done taking the quiz, they press the submit button that has appeared at the bottom of the page.

  Pressing the submit button iterates over the answers array.  The relevant user answer array is checked to see if the values match.  If they answered wrong or left it blank, it marks it wrong and writes that to an array.  If it is right, it marks that.  After going through all of the questions and checking whether they were right or not, the user's score array is reduced into a number which is converted into a percent right out of 10, the number of questions in a quiz.

  An array of the elements is queried and the index from the iterator above is used to select the right element.  That element then sets a background string which is in the html element's class to a string.  When you start the quiz, the string is empty and so no classes are applied.  If you got the question right, you get a 'green' class.  Wrong, 'red' class.  This sets the background to the appropriate color, giving context to the question.

  Finally, to color-code the answers, the user's answers are turned red.  Then the correct answer is turned green.  If the user answered correctly, then they see their answer as green because the browser didn't have time to render the red.  If not, though, their answer shows red while the right one turns green.  Because the DOM isn't being used to handle score calculation, this behavior is sufficient.

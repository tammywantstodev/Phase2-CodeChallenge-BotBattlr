#Bot Battlr
##App.jsx
This is the main component file that collects the children components in one place to eventually pass them
to the main.jsx file to be rendered on the web page. It also contains the state for the bots data and some
functions to manipulate this state which it passes to the children components to use.

##db.json db.json served the role of the backend in this application. It provided the 
all the data relating to all the bots.

##BotCollection.jsx
BotCollection is one of the children components. It contains all the necessary code to get the data about 
the bots from the `json` file and it uses this data to create elements which it populates with the appropriate
values. Inside this file is also the buttons that allow two things to be done with the bots in the collection,
adding them to our army, or permanently deleting them from the collection.

##YourBotArmy.jsx
This file is where bots go once they've been added to the army. It two  ``props``uses a function, ``bots``
 to create various elements to store information on bots we've added to our army and ``handleRemoveBot`` 
 a function defined in App.jsx to enable the removal of bots we no longer want in our army.

##main.jsx
This jsx file is the last step to having all the data in the various components rendered in our html file.

##index.html
This files enables the rendering of our jsx components.

##css files
These contain all the styling to ensure our elements appear on the webpage in a presentable way.

##Requirements
Node.js installed on your machine
Clone this repository ``<git> clone <ssh code>``
Install the necessary dependancies with ``npm install``
Run the app with ``npm run dev``

###Author: Tamara Kaka

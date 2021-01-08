# [Teemz](https://teemz-app.github.io/teemz-frontend/)
![GitHub repo size](https://img.shields.io/github/repo-size/teemz-app/teemz-frontend?logo=GitHub&style=for-the-badge) <br>
Teemz is a football team generator, where the user can set the number of players per team, give the teams a name, and then save a match's result in a database. Users can also add new players into the database, as well as access a list of all players and all saved matches. The app uses Axios to make RESTful API requests. This repo is the Laravel backend where the API endpoints were created.

### Generating Teams
![Generating Teams gif](/readmeAssets/generateTeams.gif) <br>
The action of pressing the `Generate Teams` makes an axios `GET` request to get all the players. The React then creates the teams. Once the user modifies the game data and the user presses the `Save Game` button. This creates a Game `POST` request, which stores the game data in the database.

### Adding and Seeing players
![Adding and seeing players gif](/readmeAssets/addandseeplayer.gif) <br>
The user can type the name of a new player in an input field on the menu page. When the user clicks on `Add Player` an axios `POST` request is sent to save the new player into the database, defaulting their wins and losses to 0. The user can then view this and all the other players in the database by clicking `See Players`, which makes an axios `GET` request for all the players. A similar process happens when pressing the `See Matches`. 

# Table of contents

- [Table of contents](#table-of-contents)
- [Installing The React Project Locally](#installing-the-react-project-locally)
- [What is Teemz?](#what-is-teemz)
  - [Getting players](#getting-players)
  - [Choosing Players](#choosing-players)
  - [Picking Teams](#picking-teams)
  - [Saving Matches](#saving-matches)
  - [Adding Players](#adding-players)
- [React App](#react-app)
  - [Available Scripts](#available-scripts)
    - [`npm start`](#npm-start)
    - [`npm test`](#npm-test)
    - [`npm run build`](#npm-run-build)
    - [`npm run eject`](#npm-run-eject)
  - [Learn More](#learn-more)
    - [Code Splitting](#code-splitting)
    - [Analyzing the Bundle Size](#analyzing-the-bundle-size)
    - [Making a Progressive Web App](#making-a-progressive-web-app)
    - [Advanced Configuration](#advanced-configuration)
    - [Deployment](#deployment)
    - [`npm run build` fails to minify](#npm-run-build-fails-to-minify)

# Installing The React Project Locally

   1. Clone the git repository by running this command in the directory you want it in.
   
   ```
    git@github.com:merryface/football-app-front.git
   ```

   Or, if you have the GitHub CLI:

   ```
    gh repo clone merryface/football-app-front
   ```


   2. cd into the project directory
   
   ```
    cd football-app-front
   ```

   3. Install all dependencies from npm
   ```
    npm install
   ```

<br>
<br>

# What is Teemz?
Teemz is a football team generator, where the user can set the number of players per team, give the teams a name, and then save a match's result in a database. Users can also add new players into the database, as well as access a list of all players and all saved matches. The app uses Axios to make RESTful API requests.

## Getting players
The makes an API request to fetch player data whenever the `Generate Teams` or `See Players` buttons are clicked, meaning that those tools will always have the latest players data.
## Choosing Players
On the `menu` page the user changes the number of players in each team. If the number od players per team chosen happens to exceed half the total number of players in the database, the generate teams function will use half the number of players in the database as a value, which prevents an error from occuring. Teams are also capped at 16 players per side.

## Picking Teams
Each player has a win rate value. The higher the win rate, the more proficient the player is considered to be. The players array will be shuffled and then the first players in the array are taken until there are enough to fill two teams. This new array is sorted by win rate. The top two players are added to their respective teams. The player with the higher win rates will then get even indexed (odd for arrays) players in their team. i.e 4, 6, 8, 10 etc and the other team will get the odd (even for arrays) indexed players in their team. This allows for a slightly better match balancing than simply using even or odd indexed players.

## Saving Matches
When a user clicks on `Save Game!` they are firing off a post API request, which stores the game data into the database. That data can then be viewed by clicking on `See Matches`, either in the `Menu` page or the `Game Saved` page.
## Adding Players
To add a player the user just has to enter a name of at least 2 characters in the add player input on the `Menu` page and then press return on their keyboard or click on the `Add Player` button.

<br>
<br>






# React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

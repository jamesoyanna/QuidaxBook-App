# Quidax Book App

This project is a simple ecommerce book application use for purchase of book items. The application is built with React JS. 

## Application Features
-A Home view with the display of various book items.
-Mood History - Display the moods of the cat on button click.





##### - If giving more time and incentives for this project, I would want to implement other functionality of the application.

##### - I am currently refactoring the application where necessary.


### The application is also fully deploy and hosted on Netlify. Live view of the application Demo can be found here- [Mood Tracker App](https://mood-tracker-app.netlify.app/)

## Pictutial View of the Application

To select a mood emoji by clicking on any of the emojis.
![Initial state](https://user-images.githubusercontent.com/26815113/144429819-c08065d3-7c9c-4b52-bcfc-1edddf1c2b9c.JPG)


Click on the save modd button to create a mood for the cat.

![second mood](https://user-images.githubusercontent.com/26815113/144430594-3a12d7d8-bdb1-49e4-935a-753e579b0216.JPG)


Display each mood for the cat

![mood Display](https://user-images.githubusercontent.com/26815113/144431058-32d6d996-2d48-4d1e-8a9c-46ba916fa378.JPG)


## How to use the application

## Table of Contents
- [Getting Started](#getting-started)
	- [Tools Required](#tools-required)
	- [Installation](#installation)
- [Development](#development)
- [Running the App](#running-the-app)
- [Deployment](#deployment)
- [Authors](#authors)
- [License](#license)

## Getting Started

The project has two branches: `master`, `dev`.

* `master` The master branch contains the full source code on the solution I have developed for excercise.
* `dev` The dev branch contains code under development. 

 ## Project Folder structure.

```
	mood-tracker-app
	├── README.md
	├── package.json
	├── .gitignore
	├── public
	│   ├── favicon.ico
	│   ├── index.html
	│   └── manifest.json
	└── src
	      └── components
		     ├── Mood
			      ├── Mood.js
				  ├── Mood.css
			 ├── MoodHistory
			       ├── MoodHistory.js
                    ├── MoodHistory.css
			 ├── MoodScreen
			       ├── MoodScreen.js
				   ├── MoodScreen.css
			 ├── Card
			 ├── Container
			
	      └── Redux
	              └── moodSlice.js
		                
				  ├── store.js
		  └── Images
		  └── App.js
		  └── App.css
		  └── index.css
		  └── index.js

```

### Tools Required
The following tools is required to develop and run this application:

* A text editor like Visual Studio Code
* Command Line

### Installation
Installation steps:

##Node.js and Yarn or Npm
Your computer must have installed nodejs, and yarn to run this application You can download Node.js from https://nodejs.org and yarn from https://yarnpkg.com/lang/en/docs/install/ . NPM comes bundled with Node.js
![nodejs](https://user-images.githubusercontent.com/26815113/132867561-bf2ec1a2-cd63-461f-95dd-e95c1c6676c7.PNG)

## Install Npm Packages
You must have to install packages. You can do this by running yarn or npm install from the root of the project to install all the necessary dependencies.

### Development server


#### Running the App

  ``` 
Run yarn start or npm stall from the root of your project to start a dev server. 
Navigate to http://localhost:3000/. 
The app will automatically reload if you change any of the source files.
  ```

## Deployment

You can deploy the application on any server. You can make use of Netlify,a git-based workflow and powerful serverless platform to build, deploy, and collaborate on web apps. Visit [Netlify](https://www.netlify.com/)


## Author

#### James Oyanna
* [GitHub](https://github.com/jamesoyanna)
* [LinkedIn](https://www.linkedin.com/in/jamesoyanna)


`Mood Tracker App` is open source software

## Resources

I made use of these `resources` during development.

* [New React Js Doc](https://beta.reactjs.org/)
* [casscading Style Sheet (CSS)
* [Redux](https://redux.js.org/)
*

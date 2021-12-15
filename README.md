# Quidax Book App

This project is a simple ecommerce book application use for purchase of book items. The application is built with React JS. 

## Application Features
-A Home view with the display of various book items.
- A cart page for the display of book items added to Cart
- A Hero slider section for the dispaly of featured books.
- Add to  cart functionality - adding of book to cart
- Disabling a book product button if book is not in stock





### The application is also fully deploy and hosted on Netlify. Live view of the application Demo can be found here- [Quidax Book App](https://quidax-book-app.netlify.app/)

## Pictutial View of the Application

Home page display of book items
(![home-page](https://user-images.githubusercontent.com/26815113/146249588-ed52a8aa-eb1b-486c-af49-3a10ae7d899f.JPG)
)

Single Book Display
![single-book](https://user-images.githubusercontent.com/26815113/146249837-7caa0957-be02-4d41-abb5-e56e57e892ce.JPG)


Display of Items added to cart
![cart-items](https://user-images.githubusercontent.com/26815113/146250087-df6e6445-1248-4530-a3eb-602758c05dff.JPG)



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
#### Dependencies
The project is built with 
- React Js
- GraphQL
- Apollo Client

It uses Node.js >= 12.18.3


 ## Project Folder structure.

```
	quidaax-book-app
	├── README.md
	├── package.json
	├── .gitignore
	├── public
	│   ├── favicon.ico
	│   ├── index.html
	│   └── manifest.json
	└── src
	      └── components
		     ├── Backdrop
			      ├── Backdrop.js
				  ├── backdrop.css
			 ├── Card
			       ├── Card.js
                    ├── card.css
			 ├── CategoryDisplay
			       ├── CategoryDisplay.js
				   ├── categoryDisplay.css
			 ├── MainHero
			       ├── MainHero.js.js
				   ├── mainhero.css
			 ├── Navbar
			       ├── Navbar.js
				   ├── navbar.js
			 ├── Rating.js
	      └── contexts
	              └── CartContext.js
		                
		    ├── graphQL
		        └── queries.js

			├── Pages
			     ├── Book
				      ├── BookPage.js
					  ├── bookPage.css
			     ├── CartItem
				      ├── CartItem.js
					  ├── cartItem.css

			     ├── CategoryPage
				      ├── CategoryPage.js
					  ├── categoryPage.css
                 
				 ├── Home
				      ├── Home.js
					  
		   └── App.js
		  └── App.css
		  └── index.css
		  └── index.js

```
### Prerequisites
Ensure you have NodeJS installed by entering node -v on your terminal If you don't have NodeJS installed, go to the NodeJS Website, and follow the download instructions


### Tools Required
The following tools is required to run this application:

* A text editor like Visual Studio Code
* Command Line

### Getting the source code
You can clone the repository directly using this command:
git clone git@github.com:jamesoyanna/QuidaxBook-App.git

### Installation
Installation steps:

##Node.js and Yarn or Npm
Your computer must have installed nodejs, and yarn to run this application You can download Node.js from https://nodejs.org and yarn from https://yarnpkg.com/lang/en/docs/install/ . NPM comes bundled with Node.js
![nodejs](https://user-images.githubusercontent.com/26815113/132867561-bf2ec1a2-cd63-461f-95dd-e95c1c6676c7.PNG)

## Install Npm Packages
After clonning the application, You will have to install all the dependencies and packages. You can do this by running yarn or npm install from the root of the project folder to install.

### Development server


#### Running the App

  ``` 
Run yarn start or npm stall from the root of your project to start a dev server. 
Navigate to http://localhost:3000/. 
The app will automatically reload if you make changes to any of the source files.
  ```

## Deployment

You can deploy the application on any server. You can make use of Netlify,a git-based workflow and powerful serverless platform to build, deploy, and collaborate on web apps. Visit [Netlify](https://www.netlify.com/)

## Assumptions/ Thought process: 






## Author

#### James Oyanna
* [GitHub](https://github.com/jamesoyanna)
* [LinkedIn](https://www.linkedin.com/in/jamesoyanna)


`Quidax Book App` Open source software
## Resources

I made use of these `resources` during development.

* [New React Js Doc](https://beta.reactjs.org/)
  [GraphQl](https://graphql.org/learn/)
    [Apollo Client](https://www.apollographql.com/docs/react/)
* [casscading Style Sheet (CSS)
* [React Context Api](https://reactjs.org/docs/context.html)
*

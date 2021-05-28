Parcel is a web application bundler, differentiated by its developer experience.<br />
It offers blazing fast performance utilizing multicore processing, and requires zero configuration.

## Getting Started

Before we get started, you'll need to install Node for your project if you haven't already.

```sh
npm install -g parcel-bundler
```

Then with npm you can install dependencies from package.json

```sh
npm install
```

Now you can just run it with:

```sh
parcel index.html
```

You should get a URL that looks something like: `http://localhost:1234/`.

## Structure of the website

The `HTML` files are located at the root of the folder.

`HTML` : index.html ➥ Home-page</br>
`HTML` : apropos.html ➥ About-us-page</br>
`HTML` : actualités.html ➥ News-page</br>
`HTML` : contact.html ➥ contact-page</br>

The `SCSS` files are located in the `./src/css` directory.

`SCSS` : normalize.css => A CSS file used to standardize differences in interpretation of cascading style sheets. 
CSS ensures cross-browser consistency in the default style of HTML elements.

`SCSS` : style.scss ➥ CSS of index.html
`SCSS` : apropos.html ➥ CSS of apropos.html
`SCSS` : actualités.scss ➥ CSS of actualités.html
`SCSS` : contact.html ➥ CSS of contact.html

Note : These files have been designed in mobile first and media queries based on the 1024px screen resolution for laptop screens.

The Assets (all materials, visuals and documents) files are located in the `./src/img` directory.

This site uses two typographies which are `Lato-Regular.ttf` and `Quicksand-Bold.ttf` both available in the following directory : `./src/font`.

Note : These fonts have been imported into each SCSS file.

The `JavaScript` files are located in the `./src/js` directory.

`JS` : main.js ➥ It currently contains two functions :

• Google analytic function
• Cookies function

`JS` : actualités.js ➥ Allows you to import data from the `actualités.json` file available at the root of the directory and to display the content of articles dynamically.

Note : To modify article data use the `JSON` file.

`JS` : animation.js ➥ This is the script that animates the website.

Note : This script uses a library that you normally installed with the command : `npm install`.

`JS` : carousel.js ➥ This is the script used to make the slider for the `testimonials section` on the home page of the site.

Note : This script uses a library that you normally installed with the command : `npm install`.

`JS` : navigation.js ➥ This script makes the site menu appear when it is in mobile format.

`JS` : translate.js ➥ This script allows to change the content of the language of the site and to manage the event when clicking on the language button.

Note : This script uses a library that you normally installed with the command : `npm install`.

The files to manage the data of this function are located in the `./src/i18n` directory and you can find two files there :

• en.json ➥ JSON file to manage data in english.
• fr.json ➥ JSON file to manage data in french.

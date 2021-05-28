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

<h2>The `HTML` files are located at the root of the folder.</h2></br>

`HTML` : index.html ➥ Home-page</br>
`HTML` : apropos.html ➥ About-us-page</br>
`HTML` : actualités.html ➥ News-page</br>
`HTML` : contact.html ➥ contact-page</br>

The `SCSS` files are located in the `./src/css` directory.</br>

`SCSS` : normalize.css => A CSS file used to standardize differences in interpretation of cascading style sheets.</br>
CSS ensures cross-browser consistency in the default style of HTML elements.</br>

`SCSS` : style.scss ➥ CSS of index.html</br>
`SCSS` : apropos.html ➥ CSS of apropos.html</br>
`SCSS` : actualités.scss ➥ CSS of actualités.html</br>
`SCSS` : contact.html ➥ CSS of contact.html</br>

Note : These files have been designed in mobile first and media queries based on the 1024px screen resolution for laptop screens.</br>

The Assets (all materials, visuals and documents) files are located in the `./src/img` directory.</br>

This site uses two typographies which are `Lato-Regular.ttf` and `Quicksand-Bold.ttf` both available in the following directory : `./src/font`.</br>

Note : These fonts have been imported into each SCSS file.</br>

The `JavaScript` files are located in the `./src/js` directory.</br>

`JS` : main.js ➥ It currently contains two functions :</br>

• Google analytic function</br>
• Cookies function</br>

`JS` : actualités.js ➥ Allows you to import data from the `actualités.json` file available at the root of the directory and to display the content of articles dynamically.</br>

Note : To modify article data use the `JSON` file.</br>

`JS` : animation.js ➥ This is the script that animates the website.</br>

Note : This script uses a library that you normally installed with the command : `npm install`.</br>

`JS` : carousel.js ➥ This is the script used to make the slider for the `testimonials section` on the home page of the site.</br>

Note : This script uses a library that you normally installed with the command : `npm install`.</br>

`JS` : navigation.js ➥ This script makes the site menu appear when it is in mobile format.</br>

`JS` : translate.js ➥ This script allows to change the content of the language of the site and to manage the event when clicking on the language button.</br>

Note : This script uses a library that you normally installed with the command : `npm install`.</br>

The files to manage the data of this function are located in the `./src/i18n` directory and you can find two files there :</br>

• en.json ➥ JSON file to manage data in english.</br>
• fr.json ➥ JSON file to manage data in french.</br>

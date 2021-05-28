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

You should get a URL that looks something like: `http://localhost:1234/`.</br>

## Structure of the website</br>

## The HTML files are located at the root of the folder</br>

`HTML` : index.html ➥ Home-page</br>
`HTML` : apropos.html ➥ About-us-page</br>
`HTML` : actualités.html ➥ News-page</br>
`HTML` : contact.html ➥ contact-page</br>

Note : contact.html contains the Google public key to use ReCAPTCHA, you must replace it with your own.</br>

## The SCSS files are located in the `./src/css` directory</br>

`CSS` : normalize.css => A CSS file used to standardize differences in interpretation of cascading style sheets.</br>
        CSS ensures cross-browser consistency in the default style of HTML elements.</br>

`SCSS` : style.scss ➥ CSS of index.html</br>
`SCSS` : apropos.scss ➥ CSS of apropos.html</br>
`SCSS` : actualités.scss ➥ CSS of actualités.html</br>
`SCSS` : contact.scss ➥ CSS of contact.html</br>

Note : These files have been designed in mobile first and media queries based on the 1024px screen resolution for laptop screens.</br>

## The Assets and typographies<br>

The Assets (all materials, visuals and documents) files are located in the `./src/img` directory.</br>

This site uses two typographies which are `Lato-Regular.ttf` and `Quicksand-Bold.ttf` both available in the following directory : `./src/font`.</br>

Note : These fonts have been imported into each SCSS file.</br>

## The JavaScript files are located in the `./src/js` directory</br>

`JS` : main.js ➥ It currently contains two functions :</br>

• Google analytic function</br>
• Cookies function</br>

`JS` : actualités.js ➥ Allows you to import data from the `actualités.json` file available at the root of the directory and to display the content of articles dynamically.</br>

Note : To modify article data use the `JSON` file.</br>

`JS` : animation.js ➥ This is the script that animates the website.</br>

`JS` : carousel.js ➥ This is the script used to make the slider for the testimonials section on the home page of the site.</br>

`JS` : navigation.js ➥ This script makes the site menu appear when it is in mobile format.</br>

`JS` : translate.js ➥ This script allows to change the content of the language of the site and to manage the event when clicking on the language button.</br>

The files to manage the data of this function are located in the `./src/i18n` directory and you can find two files there :</br>

• en.json ➥ JSON file to manage data in english.</br>
• fr.json ➥ JSON file to manage data in french.</br>

## We used PHP for the form functionality of the site, all files are located in the root of the folder</br>

`PHP` : mail.php ➥ This file contains several things :</br>

• Processing of the form data</br>
• Google ReCAPTCHA</br>
• XSS security</br>

Note : You must replace the string `YOUR_SECRET_KEY` by your secret key in the url of this file.</br>

`PHP` : crypt.php ➥ Allows you to obtain a login and an encrypted password that will be used for the .htpasswd file.</br>

Note : You must create the following two files in the root folder :</br>

• .htaccess</br>
• .htpasswd</br>

`PHP` : chemin.php ➥ This file allows to have the exact path to configure it in the .htaccess file to put here : `AuthUserFile "/path/to/file/.htpasswd"`</br>

`.htaccess` Configure to access your server, example :

```sh
AuthName "Zone Securisee"
AuthType Basic
AuthUserFile "/path/to/file/.htpasswd
Require valid-user

Options +FollowSymlinks
RewriteEngine on
RewriteBase /hability/
RewriteRule ^index.html$  index.html [L]
RewriteRule ^apropos.html$  apropos.html [L]
RewriteRule ^actualités.html$  actualités.html [L]
RewriteRule ^contact.html$  contact.html [L]
```
`.htpasswd` Configure to access your server, example :<br>

```sh
admin:admin
user1:user1
user2:user2
```

Note : For more security please use the file `crypt.php` to encrypt the password.

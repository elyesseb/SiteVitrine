/* fonction google analytic
–––––––––––––––––––––––––––––––––––––––––––––––––---------– */
window.dataLayer = window.dataLayer || [];

function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-121970413-2');


/* fonction cookies
–––––––––––––––––––––––––––––––––––––––––––––––––---------– */

document.addEventListener('DOMContentLoaded', function() {
    cookieconsent.run({
        "notice_banner_type": "simple",
        "consent_type": "express",
        "palette": "light",
        "language": "fr",
        "website_name": "Hability"
    });
});
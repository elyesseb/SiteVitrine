import Translator from "@andreasremdt/simple-translator";
import EnData from '../i18n/en.json';
import FrData from '../i18n/fr.json';

var translator = new Translator({
    defaultLanguage: "fr",
    detectLanguage: true,
    selector: "[data-i18n]",
    debug: false,
    registerGlobally: "__",
    persist: false,
    persistKey: "preferred_language",
    filesLocation: "/i18n"
});

translator.add('en', EnData);
translator.add('fr', FrData);

translator.translatePageTo();
desktopLanguageToggle();
mobileLanguageToggle();

let desktopLangFr = document.querySelector('.desktopLangFr');
let desktopLangEn = document.querySelector('.desktopLangEn');

function desktopLanguageToggle() {
    var selectDesktop = document.querySelector(".desktop_lang");
    selectDesktop.addEventListener("click", evt => {
        var language = evt.target.value;
        translator.translatePageTo(language);
        desktopLangFr.classList.toggle("desktopLangFr");
        desktopLangEn.classList.toggle("desktopLangFr");
    });
}

let mobileLangFr = document.querySelector('.mobileLangFr');
let mobileLangEn = document.querySelector('.mobileLangEn');

function mobileLanguageToggle() {
    var selectMobile = document.querySelector(".mobile_lang");
    selectMobile.addEventListener("click", evt => {
        var language = evt.target.value;
        translator.translatePageTo(language);
        mobileLangFr.classList.toggle("mobileLangFr");
        mobileLangEn.classList.toggle("mobileLangFr");
    });
}
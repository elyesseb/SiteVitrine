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

function desktopLanguageToggle() {
    var selectDesktop = document.querySelector(".desktop_lang");
    selectDesktop.addEventListener("change", evt => {
        var language = evt.target.value;
        translator.translatePageTo(language);
    });
}

function mobileLanguageToggle() {
    var selectMobile = document.querySelector(".mobile_lang");
    selectMobile.addEventListener("change", evt => {
        var language = evt.target.value;
        translator.translatePageTo(language);
    });
}
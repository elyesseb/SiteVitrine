import data from '/actualités.json';

let tabActualites = data.news;

let indexActualites;

indexActualites = tabActualites;

let cards = document.querySelector('.cards');
cards.innerHTML +=
    `
    <div class="actualites_cards">
    <p class="actualites_cards-title" data-i18n="news.article1.title">${indexActualites.article1.title}</p>
    <img  class="actualites_cards-img" src="${indexActualites.article1.img}" alt="${indexActualites.article1.desc}">
    <p class="actualites_cards-texte" data-i18n="news.article1.text">${indexActualites.article1.text}</p>
    <button class="actualites_cards-btn"><a class="actualites_lien" href="${indexActualites.article1.button}" data-i18n="news.article1.button">Voir plus</a></button>    
    </div>
    <div class="actualites_cards">
    <p class="actualites_cards-title" data-i18n="news.article2.title">${indexActualites.article2.title}</p>
    <img  class="actualites_cards-img" src="${indexActualites.article2.img}" alt="${indexActualites.article2.desc}">
    <p class="actualites_cards-texte" data-i18n="news.article2.text">${indexActualites.article2.text}</p>
    <button class="actualites_cards-btn"><a class="actualites_lien" href="${indexActualites.article2.button}" data-i18n="news.article2.button">Voir plus</a></button>    
    </div>
    <div class="actualites_cards">
    <p class="actualites_cards-title" data-i18n="news.article3.title">${indexActualites.article3.title}</p>
    <img  class="actualites_cards-img" src="${indexActualites.article3.img}" alt="${indexActualites.article3.desc}">
    <p class="actualites_cards-texte" data-i18n="news.article3.text">${indexActualites.article3.text}</p>
    <button class="actualites_cards-btn"><a class="actualites_lien" href="${indexActualites.article3.button}" data-i18n="news.article3.button">Voir plus</a></button>    
    </div>
    <div class="actualites_cards">
    <p class="actualites_cards-title" data-i18n="news.article4.title">${indexActualites.article4.title}</p>
    <img  class="actualites_cards-img" src="${indexActualites.article4.img}" alt="${indexActualites.article4.desc}">
    <p class="actualites_cards-texte" data-i18n="news.article4.text">${indexActualites.article4.text}</p>
    <button class="actualites_cards-btn"><a class="actualites_lien" href="${indexActualites.article4.button}" data-i18n="news.article4.button">Voir plus</a></button>    
    </div>
    `
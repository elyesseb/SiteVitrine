
import data from '/actualités.json';
 //console.log(data)

let tabActualites = data.actualités;
//console.log(tabActualites);

let indexActualites;

for (let i = 0; i < tabActualites.length; i++) {
   indexActualites = tabActualites[i];
  //console.log(indexActualites); 

    let cards = document.querySelector('.cards');
    cards.innerHTML +=
    `
    <div class="actualites_cards">
    <p class="actualites_cards-title">${indexActualites.titre}</p>
    <img  class="actualites_cards-img" src="${indexActualites.image}" alt="">
    <p class="actualites_cards-texte">${indexActualites.texte}</p>
    <button class="actualites_cards-btn"><a class="actualites_lien" href="${indexActualites.lien}">Voir plus</a></button>    
    </div>
    `
}

 

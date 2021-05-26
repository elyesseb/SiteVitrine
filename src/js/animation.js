import ScrollReveal from 'scrollreveal';

/* Animation ScrollReveal
–––––––––––––––––––––––––––––––––––––––––––––––––– */

const sr = ScrollReveal();

/* Animation page Principale
–––––––––––––––––––––––––––––––––––––––––––––––––– */
/* Animation constat
–––––––––––––––––––––––––––––––––––––––––––––––––– */
sr.reveal('.container_constat-card', {
    distance: '5rem',
    duration: 2000
}, 1000);

/* Animation les exercices du quotidien
–––––––––––––––––––––––––––––––––––––––––––––––––– */
sr.reveal('.container_eq-element-etiquette', {
    distance: '5rem',
    duration: 2000
}, 500);

/* Animation notre solution
–––––––––––––––––––––––––––––––––––––––––––––––––– */
sr.reveal('.animation_right', {
    origin: 'right',
    distance: '15rem',
    duration: 1500
})

sr.reveal('.animation_left', {
    origin: 'left',
    distance: '15rem',
    duration: 1500
})

sr.reveal('.animation_middle', {
    distance: '15rem',
    duration: 1000,
    delay: 200
});

/* Animation les avantages
–––––––––––––––––––––––––––––––––––––––––––––––––– */
sr.reveal('.benefits_container', {
    distance: '5rem',
    duration: 1000
});
/* Animation nos partenaires scientifique
–––––––––––––––––––––––––––––––––––––––––––––––––– */
sr.reveal('.partners_container', {
    distance: '5rem',
    duration: 1000,
});


/* Animation page Actualités
–––––––––––––––––––––––––––––––––––––––––––––––––– */

sr.reveal('.actualites_txt');

sr.reveal('.actualites_cards', {
    distance: '25rem',
    duration: 1500
});

sr.reveal('.twitter_cards-api', {
    distance: '25rem',
    duration: 2000
})
import ScrollReveal from 'scrollreveal';

/* Animation ScrollReveal
–––––––––––––––––––––––––––––––––––––––––––––––––– */

const sr = ScrollReveal();

/* Animation page principale
–––––––––––––––––––––––––––––––––––––––––––––––––– */
/* Animation constat
–––––––––––––––––––––––––––––––––––––––––––––––––– */
sr.reveal('.finding_container', {
    distance: '5rem',
    duration: 1500
});

/* Animation les exercices du quotidien
–––––––––––––––––––––––––––––––––––––––––––––––––– */
sr.reveal('.container_eq-element-etiquette', {
    distance: '5rem',
    duration: 2000
}, 500);

/* Animation notre solution et nos valeurs (page à propos)
–––––––––––––––––––––––––––––––––––––––––––––––––---------– */
sr.reveal('.animation_right', {
    origin: 'right',
    distance: '15rem',
    mobile: false,
    duration: 1500
})

sr.reveal('.animation_left', {
    origin: 'left',
    distance: '15rem',
    mobile: false,
    duration: 1500
})

sr.reveal('.animation_middle', {
    distance: '15rem',
    duration: 1000
});

/* Animation les avantages
–––––––––––––––––––––––––––––––––––––––––––––––––– */
sr.reveal('.benefits_container', {
    distance: '5rem',
    duration: 1000
});
/* Animation nos partenaires scientifique
–––––––––––––––––––––––––––––––––––––––––––––––––– */
sr.reveal('.partners_container--form', {
    distance: '5rem',
    duration: 1000
});


/* Animation page actualités
–––––––––––––––––––––––––––––––––––––––––––––––––– */

sr.reveal('.imgs_actu', {
    distance: '25rem',
    duration: 1500

});

sr.reveal('.actualites_cards', {
    distance: '25rem',
    duration: 1500,
    delay: 500
});

sr.reveal('.twitter_cards-api', {
    distance: '25rem',
    duration: 2000
})

/* Animation page a propos
–––––––––––––––––––––––––––––––––––––––––––––––––– */
sr.reveal('.ambition_container--content', {
    distance: '25rem',
    duration: 1000
})

sr.reveal('.team_container--content', {
    distance: '25rem',
    duration: 1200,
    delay: 200
})

sr.reveal('.awards_container--img', {
    distance: '25rem',
    duration: 1500
})
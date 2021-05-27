import ScrollReveal from 'scrollreveal';
/* Animation ScrollReveal
–––––––––––––––––––––––––––––––––––––––––––––––––– */
const sr = ScrollReveal();
/* Animation index.html
–––––––––––––––––––––––––––––––––––––––––––––––––– */
/* Animation section le constat
–––––––––––––––––––––––––––––––––––––––––––––––––– */
sr.reveal('.finding_container', {
    distance: '5rem',
    duration: 1500
});
/* Animation section les exercices du quotidien
–––––––––––––––––––––––––––––––––––––––––––––––––– */
sr.reveal('.container_eq-element-etiquette', {
    distance: '5rem',
    duration: 2000
}, 500);
/* Animation section notre solution et nos valeurs
–––––––––––––––––––––––––––––––––––––––––––––––––– */
sr.reveal('.animation_right', {
    origin: 'right',
    distance: '0rem',
    duration: 1500
});
sr.reveal('.animation_left', {
    origin: 'left',
    distance: '15rem',
    duration: 1500
});
sr.reveal('.animation_middle', {
    distance: '15rem',
    duration: 1500
});
/* Animation section les avantages
–––––––––––––––––––––––––––––––––––––––––––––––––– */
sr.reveal('.benefits_container', {
    distance: '5rem',
    duration: 1500
});
/* Animation section nos partenaires scientifique
–––––––––––––––––––––––––––––––––––––––––––––––––– */
sr.reveal('.partners_container', {
    distance: '5rem',
    duration: 1000,
});
/* Animation page actualités.html
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
});
/* Animation apropos.html
–––––––––––––––––––––––––––––––––––––––––––––––––– */
sr.reveal('.ambition_container', {
    distance: '25rem',
    duration: 1000
});
sr.reveal('.team_container--content', {
    distance: '25rem',
    duration: 1200,
    delay: 200
});
sr.reveal('.awards_container--img', {
    distance: '25rem',
    duration: 1500
});
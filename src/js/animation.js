 /* Animation ScrollReveal
–––––––––––––––––––––––––––––––––––––––––––––––––– */

const sr = ScrollReveal();

    /* Animation page Principale
–––––––––––––––––––––––––––––––––––––––––––––––––– */

sr.reveal('.container_constat-card', {
   //origin:'left',
   distance:'5rem',
   duration:2000 
 },1000);

sr.reveal('.container_eq-element-etiquette', {
   //origin:'left',
   distance:'5rem',
   duration:2000
   
 },500);

 sr.reveal('.solution_container--title',{
   distance:'5rem',
   duration:1000,
   //delay:200
 });

 sr.reveal('.solution_container--img',{
   distance:'5rem',
   duration:1000,
   delay:200
 });

 sr.reveal('.benefits_container', {
   //origin:'left',
   distance:'5rem',
   duration:1000
 });

 sr.reveal('.partners_container',{
    distance:'5rem',
    duration:1000,
    //delay:200
  });

    /* Animation page Actualités
–––––––––––––––––––––––––––––––––––––––––––––––––– */

 sr.reveal('.actualites_txt');

 sr.reveal('.actualites_cards', {
   //origin:'left',
   distance:'25rem',
   duration:1500
 });
 
 sr.reveal('.twitter_cards-api', {
   //origin:'right',
   distance:'25rem',
   duration:2000
 })
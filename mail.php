<?php

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    // On vérifie que tous les champs sont remplis
    if(
        isset($_POST['name']) && !empty($_POST['name']) &&
        isset($_POST['email']) && !empty($_POST['email']) &&
        isset($_POST['job']) && !empty($_POST['job']) &&
        isset($_POST['message']) && !empty($_POST['message'])
    ){
        // On "nettoie" le contenu
        $name = strip_tags($_POST['name']);
        $email = strip_tags($_POST['email']);
        $job = strip_tags($_POST['job']);
        $message = htmlspecialchars($_POST['message']);

        // Ici vous devrez traiter les données

        echo " Message de {$name} envoyé";

    }

}else{
    http_response_code(405);
    echo "Méthode non autorisée";
}
?>
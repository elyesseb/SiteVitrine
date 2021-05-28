<p><a href="contact.html">&laquo;Retour à la page contact</a></p>
<?php
// On vérifie que la méthode POST est utilisée
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    // On vérifie si le champ "recaptcha-response" contient une valeur
    if(empty($_POST['recaptcha-response'])){
        header('Location: contact.html');
    }else{
        // On prépare l'URL
        $url = "https://www.google.com/recaptcha/api/siteverify?secret=VOTRE_CLE_SECRETE&response={$_POST['recaptcha-response']}";

        // On vérifie si curl est installé
        if(function_exists('curl_version')){
            $curl = curl_init($url);
            curl_setopt($curl, CURLOPT_HEADER, false);
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($curl, CURLOPT_TIMEOUT, 1);
            curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
            $response = curl_exec($curl);
        }else{
            // On utilisera file_get_contents
            $response = file_get_contents($url);
        }

        // On vérifie qu'on a une réponse
        if(empty($response) || is_null($response)){
            header('Location: contact.html');
        }else{
            $data = json_decode($response);
            if($data->success){
                if(
                    isset($_POST['name']) && !empty($_POST['name']) &&
                    isset($_POST['email']) && !empty($_POST['email']) &&
                    isset($_POST['job']) && !empty($_POST['job']) &&
                    isset($_POST['message']) && !empty($_POST['message'])
                ){
                    // On nettoie le contenu
                    $name = strip_tags($_POST['name']);
                    $email = strip_tags($_POST['email']);
                    $job = strip_tags($_POST['job']);
                    $message = htmlspecialchars($_POST['message']);

                    // Ici vous traitez vos données

                    echo '<p>Merci pour votre message !</p>';
                }
            }else{
                header('Location: contact.html');
            }
        }
    }
}else{
    http_response_code(405);
    echo '<p>Méthode non autorisée</p>';
}
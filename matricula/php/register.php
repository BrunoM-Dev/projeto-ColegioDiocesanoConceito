<?php

include_once("../database/conexaodb.php");

if(isset($_POST['nome']) and isset($_POST['email'])) {

    if (strlen($_POST['nome']) == 0) {
        echo "<p>Preencha seu nome de usuario</p>";
    } else if (strlen($_POST['email']) == 0) {
        echo "<p>Preencha seu email</p>";
    } 
    
    else {
        $nome = $mysqli->real_escape_string(trim($_POST['nome']));
        $email = $mysqli->real_escape_string(trim($_POST['email']));;
        
        $sql_query = "INSERT INTO usuarios(nome,email) VALUES('$nome','$email')";

        $mysqli->query($sql_query);

        $mysqli->close();
    }
}

?>
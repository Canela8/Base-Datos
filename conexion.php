<?php

class Cconexion{

    function ConexionBD(){

        $host = 'localhost';
        $dbname = 'LIBRERIA';
        $username = 'ADMIN';
        $password = 'root';
        $puerto = 1433;

        try{
            $conn = new PDO ("sqlsrv:Server=$host,$puerto;Database=$dbname",$username,$password);
            echo "Se conectó correctamente a la base de datos";
        }
        catch(PDOException $exp){
            echo ("No se conectó correctamente a la base de datos: $dbname, error: $exp");
            
        }
        return $conn;
    }
}

?>

<?php

$servername = "OTHONIEL\MSSQLSERVER06";
$conexion= array("Database"=>"LIBRERIA",
                "UID"=>"ADMIN",
                "PWD"=>"root",
                "CharacterSet"=>"UTF-8");
$con =sqlsrv_connect($servername,$conexion);
if($con) {
    echo "conexion exitosa ";
} else{
    echo "Fallo en la conexion ";
}
?>
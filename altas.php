<?php
include("Conn.php");
$usuario = $_POST["usuario"];
$correo = $_POST["mail"];
$contraseña = $_POST["password"];
$id =$_POST["ID"];;

$query = "INSERT INTO Usuario (IdUsuario, NombreUsuario, Contrasena, CorreoElectronico) VALUES('$id','$usuario','$contraseña','$correo')";
$res=sqlsrv_prepare($con, $query);

if(sqlsrv_execute($res)) {
    echo "Datos se insertaron correctamente";
    header("Location: http://localhost/phpsqlserver1/index.html"); exit;
} else {
    echo"Error al insertar los datos";
}
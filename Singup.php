<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link href="userstyle.css" rel="stylesheet"/>
</head>
<body>

    <div class="container">
        
        <div class="container-form">
        <form class="" action="altas.php" id="formilario" method="POST">
                <h2>Registrarse</h2>
                <div class="social-networks">
                    <ion-icon name="logo-twitch"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-tiktok"></ion-icon>
                </div>
                <div class="container-input">
                    <ion-icon name="user-outline"></ion-icon>
                    <input type="text" class="form-control" name="usuario" placeholder="Nombre de usuario">
                </div>
                <div class="container-input">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="text" class="form-control" name="mail" placeholder="Correo electrónico">
                </div>
                <div class="container-input">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="text" class="form-control" name="password" placeholder="Contraseña">
                </div>
                <div class="container-input">
                    <ion-icon name="user-outline"></ion-icon>
                    <input type="text" class="form-control" name="ID" placeholder="id">
                </div>
                <a href="#">¿Olvidaste tu contraseña?</a>
                <button type="submit" name="" class="button">Inicar Sesión</button>
            </form>
<?php
	include_once("conexion.php");
	Cconexion::ConexionBD();
?>
        </div>
    </div>
    <script src="app2.js"></script>
    <script>
                        function redirectTohtml() {
                            window.location.href = "libreria.html";  // Redirige a la página del carrito
                        }</script>
    <script src="/script.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

</body>
</html>
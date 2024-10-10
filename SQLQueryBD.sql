USE LIBRERIA

CREATE TABLE Proveedor(
IdProveedor INT NOT NULL PRIMARY KEY,
NombreProveedor VARCHAR(350) NOT NULL,
TelefonoPROVEEDOR INT NOT NULL,
DireccionPROVEEDOR VARCHAR(450) NOT NULL,
)

CREATE TABLE ROl(
IdROl INT NOT NULL PRIMARY KEY,
ROL VARCHAR(250) NOT NULL,
)

CREATE TABLE GeneroLiterario(
IdGenero INT NOT NULL,
Genero VARCHAR(250) NOT NULL PRIMARY KEY
)

CREATE TABLE Libros(
IdLibro INT NOT NULL PRIMARY KEY,
Titulo VARCHAR(500) NOT NULL,
Autor VARCHAR(350) NOT NULL,
GeneroLiterario VARCHAR(350) NOT NULL FOREIGN KEY REFERENCES GeneroLiterario(Genero),
Editorial VARCHAR(400) NOT NULL,
Edicion VARCHAR(350) NOT NULL,
FechaDeImpresion VARCHAR(100) NOT NULL,
Descripcion VARCHAR(890) NOT NULL,
NumeroDePaginas INT not null,
PrecioCompra INT NOT NULL,
PrecioVenta INT NOT NULL,
Stock INT NOT NULL,
URLimagen VARCHAR(500) NOT NULL
)

CREATE TABLE Usuario(
IdUsuario INT NOT NULL PRIMARY KEY,
NombreUsuario VARCHAR(550) NOT NULL,
Contrasena VARCHAR(500) NOT NULL,
CorreoElectronico VARCHAR(500) NOT NULL,
)

CREATE TABLE EMPLEADO(
IdEmpleado INT NOT NULL PRIMARY KEY,
IdUsuario INT NOT NULL FOREIGN KEY REFERENCES Usuario(IdUsuario),
NombreEmpleado VARCHAR(350) NOT NULL,
ApellidoPEmpleado VARCHAR(350) NOT NULL,
ApellidoMEmpleado VARCHAR(350) NOT NULL,
FechaDeNacimiento VARCHAR(200) NOT NULL,
HorrarioDeTrabajo VARCHAR(250) NOT NULL,
Rol INT NOT NULL FOREIGN KEY REFERENCES ROl(IdROl),
Permisos VARCHAR(200) NOT NULL
)

CREATE TABLE Carrito(
IdCarrito INT NOT NULL PRIMARY KEY,
IdUsuario INT NOT NULL FOREIGN KEY REFERENCES Usuario(IdUsuario),
IdLibro INT NOT NULL FOREIGN KEY REFERENCES Libros(IdLibro),
CantidadCar INT NOT NULL 
)

CREATE TABLE MetodoDePago(
IdMDP INT NOT NULL PRIMARY KEY,
NombreMDP VARCHAR(100) NOT NULL
)

CREATE TABLE Compras(
IdCompras INT NOT NULL PRIMARY KEY,
IdProveedor INT NOT NULL FOREIGN KEY REFERENCES Proveedor(IdProveedor),
FechaDeCompra VARCHAR(100) NOT NULL,
CodigoC VARCHAR(100) NOT NULL
)

CREATE TABLE DetallesCompra(
NumeroCompra INT NOT NULL PRIMARY KEY,
IdCompras INT NOT NULL FOREIGN KEY REFERENCES Compras(IdCompras),
IdProveedor INT NOT NULL FOREIGN KEY REFERENCES Proveedor(IdProveedor),
IdMDP INT NOT NULL FOREIGN KEY REFERENCES MetodoDePago(IdMDP),
Cantidad INT NOT NULL,
PrecioUnitario INT NOT NULL,
TotalCompra INT NOT NULL
)

CREATE TABLE Venta(
IdVentas INT NOT NULL PRIMARY KEY,
IdUsuario INT NOT NULL FOREIGN KEY REFERENCES Usuario(IdUsuario),
FechaDeVenta VARCHAR(100) NOT NULL,
CodigoV VARCHAR(100) NOT NULL
)

CREATE TABLE DetallesDeVenta(
NumeroVenta INT NOT NULL PRIMARY KEY,
IdVenta INT NOT NULL FOREIGN KEY REFERENCES Carrito(IdCarrito),
IdCarrito INT NOT NULL FOREIGN KEY REFERENCES Venta(IdVentas),
IdLibro INT NOT NULL FOREIGN KEY REFERENCES Libros(IdLibro),
IdMDP INT NOT NULL FOREIGN KEY REFERENCES MetodoDePago(IdMDP),
CantidadORDEN INT NOT NULL,
PrecioUnitario INT NOT NULL,
TotalVenta INT NOT NULL
)

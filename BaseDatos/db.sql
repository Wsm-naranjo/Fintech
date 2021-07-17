DROP DATABASE IF EXISTS fintech;
CREATE DATABASE IF NOT EXISTS fintech;
USE fintech;
-- TABLE USER
-- all pasword wil be encrypted using SHA1
  CREATE TABLE users (
    id INT(11) NOT NULL PRIMARY KEY,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    email VARCHAR(100) NOT NULL,
    createdAt timestamp NOT NULL DEFAULT current_timestamp
  );

  ALTER TABLE users MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE categoria(
  id Int(11) NOT NULL PRIMARY KEY,
  categoria VARCHAR(255) NOT NULL,
  Descripcion VARCHAR(255) NOT NULL,
  user_id INT(11)NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_categoria FOREIGN KEY(user_id) REFERENCES users(id)
);

ALTER TABLE categoria MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE Tienda (
  id INT(11) NOT NULL PRIMARY KEY,
  nombreNegocio VARCHAR(50) NOT NULL,
  celular INT (10) NOT NULL,
  telefono INT(10) NOT NULL,
  user_id INT(11)NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_usuarioTienda FOREIGN KEY(user_id) REFERENCES users(id)
);

ALTER TABLE Tienda MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE Comentarios (
  id INT(11) NOT NULL PRIMARY KEY,
  Tienda INT(11)NOT NULL,
  comentarios VARCHAR(100) NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_COMENTARIO FOREIGN KEY(tienda) REFERENCES Tienda(id)
);


ALTER TABLE Comentarios MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;


CREATE TABLE proveedor(
id INT(11) NOT NULL PRIMARY KEY,
NombreProveedor	varchar(50) NOT NULL,
Direccion	varchar(100) NOT NULL,
Numero	int(10)NOT NULL,
Estado	tinyint(1) NOT NULL,
user_id INT(11) not NULL,

created_at timestamp NOT NULL DEFAULT current_timestamp,
CONSTRAINT fk_usurio_proveedor FOREIGN KEY(user_id) REFERENCES users(id)
);

ALTER TABLE proveedor MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE productoEntrada(
id INT(11) NOT NULL PRIMARY KEY,
codigo VARCHAR(50) Not NULL,
NombreProducto varchar(50) NOT NULL,
Cantidad 	int(20) NOT NULL,
precio VARCHAR(4) NOT NULL,
FechaCadusidad VARCHAR(225) NOT NULL,
proveedor int(11) NOT NULL,
user_id INT(11) not NULL,
FechaRegistro timestamp NOT NULL DEFAULT current_timestamp,
CONSTRAINT fk_usurios_PRODUCTOSeNTRADA FOREIGN KEY(user_id) REFERENCES users(id)
);
ALTER TABLE productoEntrada ADD CONSTRAINT fk_usuairosProveedores FOREIGN KEY(proveedor) REFERENCES proveedor(id);
ALTER TABLE productoEntrada MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE producto (
 id INT(11) NOT NULL PRIMARY KEY,
codigo VARCHAR(50) Not NULL,
NombreProducto VARCHAR(50) NOT NULL,
Cantidad 	int(20) NOT NULL,
precioVenta VARCHAR(4) NOT NULL,
FechaCadusidad VARCHAR(225) NOT NULL,
categoria VARCHAR(50) Not NULL,
Tienda int(11) NOT NULL,
usuario int(11) NOT NULL,
FechaRegistro timestamp NOT NULL DEFAULT current_timestamp,
CONSTRAINT fk_usurioproductos FOREIGN KEY(usuario) REFERENCES users(id),
CONSTRAINT fk_productotienda FOREIGN KEY(Tienda) REFERENCES Tienda(id)
);

ALTER TABLE producto MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE cliente(
id INT(11) PRIMARY KEY NOT NULL,
Nombres VARCHAR(50) NOT NULL,
username VARCHAR(16) NOT NULL,
password VARCHAR(60) NOT NULL,
Telefono INT(10) NOT NULL,
created_at timestamp NOT NULL DEFAULT current_timestamp
);

ALTER TABLE cliente MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

CREATE TABLE lista (
  id INT (11) PRIMARY KEY NOT NULL,
  Nombre VARCHAR(50) NOT NULL,
  Cantidad INT(6) NOT NULL,
  Precio VARCHAR (4) not NULL,
  Cliente INT(11) not NULL,
  CONSTRAINT fk_clientes FOREIGN KEY(Cliente) REFERENCES cliente(id)
);

ALTER TABLE lista MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
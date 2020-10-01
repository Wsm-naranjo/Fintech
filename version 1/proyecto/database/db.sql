CREATE DATABASE fintech;
USE fintech;
-- TABLE USER
-- all pasword wil be encrypted using SHA1
  CREATE TABLE users (
    id INT(11) NOT NULL PRIMARY KEY,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    email VARCHAR(100) NOT NULL
  );

  ALTER TABLE users MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE producto (
  id INT(11) NOT NULL PRIMARY KEY,
  codigo VARCHAR(50) NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  cantidad VARCHAR(50)NOT NULL,
  unidad varchar(255)NOT NULL,
  precio INT(4)NOT NULL,
  user_id INT(11)NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_users FOREIGN KEY(user_id) REFERENCES users(id)
);

ALTER TABLE producto MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE proveedor(
id INT(11) NOT NULL PRIMARY KEY,
NombreProveedor	varchar(50) NOT NULL,
Fecha	date NOT NULL,
Direccion	varchar(100) NOT NULL,
Numero	int(10)NOT NULL,
Estado	tinyint(1) NOT NULL,
user_id INT(11),
CONSTRAINT fkk_user FOREIGN KEY(user_id) REFERENCES users(id)
);

ALTER TABLE proveedor MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE productoentrada(
id INT(11) NOT NULL PRIMARY KEY,
NombreProducto varchar(50) NOT NULL,
Tipo varchar(50) NOT NULL,
Cantidad 	int(20) NOT NULL,
precio INT(4) NOT NULL,
FechaCadusidad	date NOT NULL,
Proveedores int(11) NOT NULL,
FechaRegistro timestamp NOT NULL DEFAULT current_timestamp
);

ALTER TABLE productoentrada ADD CONSTRAINT fk_proveedor FOREIGN KEY(Proveedor) REFERENCES proveedor(id)
ALTER TABLE productoentrada MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE cliente(
id INT(11) PRIMARY KEY NOT NULL,
Cedula INT(10) NOT NULL,
Nombre VARCHAR(50) NOT NULL,
Telefono INT(10) NOT NULL,
user_id INT(11) NOT NULL
);

ALTER TABLE cliente ADD CONSTRAINT fk_usuarios FOREIGN KEY(user_id) REFERENCES users(id)
ALTER TABLE cliente MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
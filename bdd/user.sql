create DATABASE fintech;
use fintech;
CREATE TABLE users (
    id INT(11) NOT NULL PRIMARY KEY,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
   nombre varchar (40) NOT NUll,
apellidos varchar (40) NOT NUll,
DireccionLocal varchar (40) NOT NUll,
nombrelocal varchar (40) NOT NUll,
telf int(10) NOT NUll,
cel int(10) NOT NUll
  );

  ALTER TABLE users MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1; 

create table usuario_empleado(
    id INT(11) NOT NULL PRIMARY KEY,
    cedula_ue VARCHAR(16) NOT NULL,
    contraena_ue VARCHAR(60) NOT NULL,
nombre_ue varchar(40) NOT NULL,
apellido_ue varchar (40) NOT NULL,
direccion_ue varchar(50) NOT NULL,
telf_ue int(10) NOT NULL,
cel_ue int(10) NOT NULL,
usuario int(11) NOT NULL,
CONSTRAINT fk_usuario_empleado FOREIGN KEY(usuario) REFERENCES users(id)
);
ALTER TABLE usuario_empleado MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

create table Productos(
id int(11) primary key NOT NULL,
cod_producto varchar(40)   NOT NULL,
nombre_producto varchar (40)  NOT NULL,
p_adquision_producto integer  NOT NULL,
p_venta_producto integer  NOT NULL,
cantidad_medida varchar(30)  NOT NULL,
cantidad integer  NOT NULL,
admin int (11) NOT NUll,
CONSTRAINT fk_productos_admin FOREIGN KEY(admin) REFERENCES users(id)
);
ALTER TABLE Productos MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

create table Fintech (
id_fintech varchar(10) primary KEY  NOT NULL,
sobre_fintech text  NOT NULL,
vision text  NOT NULL,
 mision text  NOT NULL 
);
ALTER TABLE Fintech MODIFY id_fintech INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

create table  stock (
id varchar (30) primary KEY NOT NULL,
 stock_entrada integer NOT NULL,
 stock_salida integer NOT NULL ,
 usuario int(11) NOT NULL,
CONSTRAINT fk_usuario_admin FOREIGN KEY(usuario) REFERENCES users(id) 
);
ALTER TABLE stock MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;



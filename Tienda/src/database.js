const Sequelize = require('sequelize')

const UsuarioModelos = require('./modelos/usuario')
const categoriaModelos = require('./modelos/Categoria')
const tiendaModelos = require('./modelos/tienda')
const comentarioModelos = require('./modelos/comentarios') 
const provedorModelos = require('./modelos/provedor')
const productoEntradaModelos = require('./modelos/productoEntrada')
const productoModelos = require('./modelos/productos')
const clienteModelos = require('./modelos/cliente')
const listaProductosModelos = require('./modelos/listaProductos')

const sequelize = new Sequelize(
  'fintech', 
  'root', 
  '', 
  {
  host: 'localhost',
  dialect: 'mysql',
  pool:{
    max:5,
    min:0,
    require:30000,
    idle: 10000
   }
  }
)

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

  sequelize.sync({ force: false})
  .then(() =>{
    console.log("Tablas sincronizadas")
  })

const usuarios = UsuarioModelos(sequelize, Sequelize)
const categoria = categoriaModelos(sequelize, Sequelize)
const tienda = tiendaModelos(sequelize, Sequelize)
const comentario = comentarioModelos(sequelize, Sequelize)
const provedor = provedorModelos(sequelize, Sequelize)
const entredaProductos = productoEntradaModelos(sequelize, Sequelize)
const productos = productoModelos(sequelize, Sequelize)
const cliente = clienteModelos(sequelize, Sequelize)
const listaProductos = listaProductosModelos(sequelize, Sequelize) 

usuarios.hasMany(categoria)
categoria.belongsTo(usuarios)

usuarios.hasMany(tienda)
tienda.belongsTo(usuarios)

tienda.hasMany(comentario)
comentario.belongsTo(tienda)

usuarios.hasMany(provedor)
provedor.belongsTo(usuarios)

provedor.hasMany(entredaProductos)
entredaProductos.belongsTo(provedor)

tienda.hasMany(productos)
productos.belongsTo(tienda)

cliente.hasMany(listaProductos)
listaProductos.belongsTo(cliente)

module.exports = {
  usuarios,
  categoria,
  tienda,
  comentario,
  provedor,
  entredaProductos,
  productos,
  cliente,
}
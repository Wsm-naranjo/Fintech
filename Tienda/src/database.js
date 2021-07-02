const Sequelize = require('sequelize')

const UsuarioModelos = require('./modelos/usuario')
const categoriaModelos = require('./modelos/Categoria')
const tiendaModelos = require('./modelos/tienda')
const comentarioModelos = require('./modelos/comentarios') 
const provedorModelos = require('./modelos/provedor')
const productoEntradaModelos = require('./modelos/productoEntrada')

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


module.exports = {
  usuarios,
  categoria,
  tienda,
  comentario,
  provedor,
  entredaProductos
}
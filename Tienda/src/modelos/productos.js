const productos = (sequelize, type)=>{
    return sequelize.define('productos', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigo: type.INTEGER,
        NombreProducto: type.STRING,
        Cantidad: type.INTEGER,
        precioVenta: type.INTEGER,
        FechaCadusidad: type.DATE,
        categoria: type.STRING,
        createdAt:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
            allowNull: false
        }
    })
}

module.exports = productos
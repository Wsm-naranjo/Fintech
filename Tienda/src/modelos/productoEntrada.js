const productoEntrada = (sequelize, type)=>{
    return sequelize.define('productoEntradas', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigo: type.INTEGER,
        NombreProducto: type.STRING,
        NombreProvedor: type.STRING,
        Cantidad: type.INTEGER,
        precioActual: type.INTEGER,
        FechaCadusidad: type.DATE,
        createdAt:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    })
}

module.exports = productoEntrada
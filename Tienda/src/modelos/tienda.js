const tienda = (sequelize, type)=>{
    return sequelize.define('tiendas', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreNegocio: type.STRING,
        ruc: type.INTEGER,
        fechaCreacion: type.DATE,
        direccion: type.STRING,
        celular: type.INTEGER,
        telefono: type.INTEGER,
        createdAt:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    })
}

module.exports = tienda;
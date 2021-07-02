const tienda = (sequelize, type)=>{
    return sequelize.difine('tiendas', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreNegocio: type.STRING,
        ruc: type.INTEGER,
        fechaCreacion: type.Date,
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
            defaultValue: type.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
            allowNull: false
        }
    })
}

module.exports = tienda;
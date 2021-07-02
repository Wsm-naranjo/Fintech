const provedor = (sequelize, type)=>{
    return sequelize.define('provedores', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        NombreProveedor: type.STRING,
        Direccion: type.STRING,
        Numero: type.INTEGER,
        Estado: type.BOOLEAN,
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

module.exports = provedor
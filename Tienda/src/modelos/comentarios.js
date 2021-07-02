const comentarios = (sequelize, type)=>{
    return sequelize.define('comentarios',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comentario: type.STRING(500),
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

module.exports = comentarios
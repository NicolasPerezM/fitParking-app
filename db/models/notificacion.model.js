import { Model, DataTypes, Sequelize } from 'sequelize';
import { USUARIO_TABLE } from './usuario.model.js';

const NOTIFICACION_TABLE = 'notificaciones';

const notificacionSchema = {
    
    idNotificacion: {
        field: 'id_notificacion',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    idUsuario: {
        field: 'id_usuario',
        type: DataTypes.INTEGER,
        references: {
            model: USUARIO_TABLE,
            key: 'id_usuario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    mensaje: {
        allowNull: false,
        type: DataTypes.STRING
    },
    fechaDeEnvio: {
        field: 'fecha_de_envio',
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    tipoNotificacion: {
        field: 'tipo_notificacion',
        allowNull: false,
        type: DataTypes.ENUM('expiracion', 'pagoExitoso', 'pagoFallido'),
        defaultValue: 'expiracion'
    },
}

class Notificacion extends Model {
    static associate(models){

    }

    static config(sequelize){
        return{
            sequelize,
            tableName: NOTIFICACION_TABLE,
            modelName: 'Notificacion',
            timestamps: false
        }
    }
}

export { NOTIFICACION_TABLE, notificacionSchema, Notificacion }
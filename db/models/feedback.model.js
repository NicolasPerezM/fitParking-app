import { Model, DataTypes, Sequelize } from 'sequelize';
import { USUARIO_TABLE } from './usuario.model.js';

const FEEDBACK_TABLE = 'feedback';

const feedbackSchema = {
    idFeedback: {
        field: 'id_feedback',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    idUsuario: {
        field: 'id_usuario',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: USUARIO_TABLE,
            key: 'id_usuario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    comentario: {
        allowNull: false,
        type: DataTypes.STRING
    },
    fechaCreacion: {
        field: 'fecha_creacion',
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}


class Feedback extends Model {
    static associate(models) {
        this.belongsTo(models.Usuario, {
            as: 'Usuario',
            foreignKey: 'idUsuario'
        })
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: FEEDBACK_TABLE,
            modelName: 'Feedback',
            timestamps: false
        }
    }
}

export { FEEDBACK_TABLE, feedbackSchema, Feedback }
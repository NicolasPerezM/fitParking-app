import { DataTypes, Model, Sequelize } from 'sequelize';
import { USUARIO_TABLE } from './usuario.model.js';
import { HISTORIAL_PARQUEO_TABLE } from './historialParqueo.model.js';

const PAGOS_TABLE = 'pagos';

const pagosSchema = {
    idPago: {
        field: 'id_pago',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    idUsuarios: {
        field: 'id_usuarios',
        type: DataTypes.INTEGER,
        references: {
            model: USUARIO_TABLE,
            key: 'id_usuario'
        },
        unique: true,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    idHistorial: {
        field: 'id_historial',
        type: DataTypes.INTEGER,
        references: {
            model: HISTORIAL_PARQUEO_TABLE,
            key: 'id_historial'
        },
        unique: true,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    monto: {
        allowNull: false,
        type: DataTypes.DECIMAL
    },
    fechaDeCreacion: {
        field: 'fecha_de_creacion',
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    estado: {
        allowNull: false,
        type: DataTypes.ENUM('pendiente', 'aprobado', 'rechazado')
    }
}

class Pagos extends Model {
    static associate(models) {
        this.belongsTo(models.Usuario, { as: 'Usuarios' });
        this.belongsTo(models.HistorialParqueo, { as: 'HistorialParqueo' });
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: PAGOS_TABLE,
            modelName: 'Pagos',
            timestamps: false
        }
    }
}

export { PAGOS_TABLE, pagosSchema, Pagos }
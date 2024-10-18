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
    idHistorialParqueo: {
        field: 'id_historial',
        type: DataTypes.INTEGER,
        unique: true,
        references: {
            model: HISTORIAL_PARQUEO_TABLE,
            key: 'id_historial'
        },
        unique: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
        this.belongsTo(models.Usuario, { 
            as: 'Usuario',
            foreignKey: 'idUsuario'
         });

        this.belongsTo(models.HistorialParqueo, { 
            as: 'historialParqueo',
            foreignKey: 'idHistorialParqueo' 
        });
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

import { Model, DataTypes, Sequelize } from 'sequelize';
import { LOTES_TABLE } from './lote.model.js';

const ESPACIOPARQUEO_TABLE = 'espacio_parqueo';

const espacioParqueoSchema = {

    idEspacioParqueo: {
        field: 'id_espacio_parqueo',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    idLote: {
        field: 'id_lote',
        type: DataTypes.INTEGER,
        references: {
            model: LOTES_TABLE,
            key: 'id_lote'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    estado: {
        allowNull: false,
        type: DataTypes.ENUM('disponible', 'ocupado', 'mantenimiento', 'reservado'),
        defaultValue: 'disponible'
    }
}

class EspacioParqueo extends Model {
    static associate(models) {
        this.hasMany(models.Reserva, {
            as: 'reservas',
            foreignKey: 'idEspacioParqueo'
        });
        this.hasMany(models.HistorialParqueo, {
            as: 'historialParqueo',
            foreignKey: 'idEspacioParqueo'
        });
        this.belongsTo(models.Lote, {
            as: 'lote',
            foreignKey: 'idLote'
        });
        
    }

    static config(sequelize) {
        return {    
            sequelize,  
            tableName: ESPACIOPARQUEO_TABLE,
            modelName: 'EspacioParqueo',
            timestamps: false
        }
    }
}

export { ESPACIOPARQUEO_TABLE, espacioParqueoSchema, EspacioParqueo }
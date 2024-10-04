import { Model, DataTypes, Sequelize } from 'sequelize';

const LOTES_TABLE = 'lotes';

const loteSchema = {
    idLote: {
        field: 'id_lote',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombreLote: {
        field: 'nombre_lote',
        allowNull: false,
        type: DataTypes.STRING
    },
    ubicacion: {
        allowNull: false,
        type: DataTypes.STRING
    },
    capacidad: {
        allowNull: true,
        type: DataTypes.INTEGER
    }
}

class Lote extends Model {
    static associate(models) {
        
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: LOTES_TABLE,
            modelName: 'Lote',
            timestamps: false
        }
    }
}

export { Lote, loteSchema, LOTES_TABLE }
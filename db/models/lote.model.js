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
    },
    tipoLote: {
        field: 'tipo_lote',
        allowNull: false,
        type: DataTypes.ENUM("Cubierto", "Descubierto"),
        defaultValue: "Descubierto"
    },
    precioPorHora: {
        field: 'precio_por_hora',
        allowNull: false,
        type: DataTypes.FLOAT
    }
}

class Lote extends Model {
    static associate(models) {
        this.hasMany(models.EspacioParqueo, {
            as: 'espacioParqueo',
            foreignKey: 'idLote'
        })
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
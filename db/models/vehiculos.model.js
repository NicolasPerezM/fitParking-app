import { Model, DataTypes, Sequelize } from 'sequelize';

const VEHICULOS_TABLE = 'vehiculos';

const vehiculosSchema = { 
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    marca: {
        allowNull: false,
        type: DataTypes.STRING
    },
    modelo: {
        allowNull: true,
        type: DataTypes.STRING
    },
    color: {
        allowNull: false,
        type: DataTypes.STRING
    },
    placa: {
        allowNull: false,
        type: DataTypes.STRING
    },
    tipoVehiculo: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'tipo_vehiculo'
    }
}

class Vehiculos extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: VEHICULOS_TABLE,
            modelName: 'Vehiculos',
            timestamps: false
        }
    }
}   

export { Vehiculos, vehiculosSchema, VEHICULOS_TABLE};
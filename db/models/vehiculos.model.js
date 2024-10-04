import { Model, DataTypes, Sequelize } from 'sequelize';
import { USUARIO_TABLE } from './usuario.model.js'

const VEHICULOS_TABLE = 'vehiculos';

const vehiculosSchema = { 
    idVehiculo: {
        field: 'id_vehiculo',
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
        onaUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
        allowNull: true,
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
    static associate(models) {
        //relacion 1-1
        //this.belongsTo(models.Reserva, {as: 'reserva', foreignKey: 'id'});
    }
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
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
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: USUARIO_TABLE,
            key: 'id_usuario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
        //relacion 1-muchos
        this.belongsTo(models.Usuario, { 
            as: 'Usuario',
            foreignKey: 'idUsuario' 
        });
        this.hasMany(models.Reserva, {
            as: 'reservas',
            foreignKey: 'idVehiculo'
        })
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

export { Vehiculos, vehiculosSchema, VEHICULOS_TABLE };
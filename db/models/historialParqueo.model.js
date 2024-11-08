
import { Model, DataTypes, Sequelize } from 'sequelize';
import { USUARIO_TABLE } from './usuario.model.js';
import { VEHICULOS_TABLE } from './vehiculos.model.js';
import { ESPACIOPARQUEO_TABLE } from './espacioParqueo.model.js';

const HISTORIAL_PARQUEO_TABLE = 'historial_parqueo';

const historialParqueoSchema = {

    idHistorialParqueo: {
        field: 'id_historial',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    idUsuario: {
        field: 'id_usuario',
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: USUARIO_TABLE,
            key: 'id_usuario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    idVehiculo: {
        field: 'id_vehiculo',
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: VEHICULOS_TABLE,
            key: 'id_vehiculo'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    isRegistered: {
        field: 'is_registered',
        allowNull: false,
        type: DataTypes.BOOLEAN
    },
    idEspacioParqueo: {
        field: 'id_espacio_parqueo',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ESPACIOPARQUEO_TABLE,
            key: 'id_espacio_parqueo'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    fechaEntrada: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    fechaSalida: {
        allowNull: true,
        type: DataTypes.DATE
    },
    isReserved: {
        field: 'is_reserved',
        allowNull: false,
        type: DataTypes.BOOLEAN
    },
    placa: {
        allowNull: false,
        type: DataTypes.STRING
    },
    tipoVehiculo: {
        field: 'tipo_vehiculo',
        allowNull: false,
        type: DataTypes.ENUM('moto', 'carro', 'bicicleta')
    }
}

class HistorialParqueo extends Model {
    static associate(models) {
        this.hasOne(models.Pagos, {
            as: 'pagos',
            foreignKey: 'idHistorialParqueo'
        })
        this.belongsTo(models.Usuario, {
           as: 'Usuario',
           foreignKey: 'idUsuario'
       });
       this.belongsTo(models.Vehiculos, {
           as: 'vehiculo',
           foreignKey: 'idVehiculo'
       });
       this.belongsTo(models.EspacioParqueo, {
           as: 'espacioParqueo',
           foreignKey: 'idEspacioParqueo'
        });
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: HISTORIAL_PARQUEO_TABLE,
            modelName: 'HistorialParqueo',
            timestamps: false
        }
    }
}

export { HISTORIAL_PARQUEO_TABLE, historialParqueoSchema, HistorialParqueo }


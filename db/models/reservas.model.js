import { Model, DataTypes, Sequelize } from 'sequelize';
import { USUARIO_TABLE } from './usuario.model.js';
import { VEHICULOS_TABLE } from './vehiculos.model.js';
import { ESPACIOPARQUEO_TABLE } from './espacioParqueo.model.js';

const RESERVAS_TABLE = 'reservas';
const reservaSchema = {

    idReserva:{
        field: 'id_reserva',
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
    idVehiculo: {
        field: 'id_vehiculo',
        type: DataTypes.INTEGER,
        references: {
            model: VEHICULOS_TABLE,
            key: 'id_vehiculo'
        }
    },
    idEspacioParqueo: {
        field: 'id_espacio_parqueo',
        type: DataTypes.INTEGER,
        references: {
            model: ESPACIOPARQUEO_TABLE,
            key: 'id_espacio_parqueo'
        }
    },
    fechaInicio: {
        allowNull: false,
        type: DataTypes.DATE
    },
    fechaFin: {
        allowNull: false,
        type: DataTypes.DATE
    },
    estadoReserva: {
        field: 'estado_reserva',
        type: DataTypes.ENUM('pendiente', 'cancelada', 'activa'),
        defaultValue: 'activa'
    },
    fechaCreacion: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },    
}

class Reserva extends Model {
    static associate(models) {

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: RESERVAS_TABLE,
            modelName: 'Reserva',
            timestamps: false
        }
    }
}

export { RESERVAS_TABLE, reservaSchema, Reserva }
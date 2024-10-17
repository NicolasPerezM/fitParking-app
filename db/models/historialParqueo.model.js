
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
        allowNull: false,
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
        references: {
            model: VEHICULOS_TABLE,
            key: 'id_vehiculo'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    idEspacioParqueo: {
        field: 'id_espacio_parqueo',
        type: DataTypes.INTEGER,
        references: {
            model: ESPACIOPARQUEO_TABLE,
            key: 'id_espacio_parqueo'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    tipoIngreso: {
        field: 'tipo_ingreso',
        allowNull: false,
        type: DataTypes.ENUM('sin_reserva', 'con_reserva')
    }
}

class HistorialParqueo extends Model {
    static associate(models) {
        /*this.hasOne(models.Pagos, {
            as: 'pagos',
            foreignKey: 'idHistorial'
        })*/
        this.belongsTo(models.Usuario, {
           as: 'Usuario',
           foreignKey: 'idUsuario'
       });
       this.belongsTo(models.Vehiculos, {
           as: 'vehiculo',
           foreignKey: 'idVehiculo'
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

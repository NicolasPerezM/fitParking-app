import { DataTypes, Model, Sequelize } from "sequelize";
import { USUARIO_TABLE } from "./usuario.model.js";

const INCIDENCIAS_TABLE = 'incidencias';

const incidenciasSchema = {

    idIncidencia: {
        field: 'id_incidencia',
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
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    tipoReporte: {
        field: 'tipo_reporte',
        type: DataTypes.ENUM('ingresos', 'ocupacion', 'uso_parqueadero'),
        allowNull: false
    },
    FechaGeneracion: {
        field: 'fecha_de_generacion',
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    descripcion: {
        allowNull: false,
        type: DataTypes.STRING 
    }
}

class Incidencias extends Model {
    static associate(models){

    }

    static config(sequelize){
        return {
            sequelize,
            model: 'Incidencias',
            tableName: INCIDENCIAS_TABLE,
            timestamps: false
        }
    }
}

export { INCIDENCIAS_TABLE, incidenciasSchema, Incidencias }
import { Model, DataTypes, Sequelize } from 'sequelize';

const USUARIO_TABLE = 'usuarioss';
const userSchema ={
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    Nombres: {
        allowNull: false,
        type: DataTypes.STRING
    },
    Apellidos: {
        allowNull: false,
        type: DataTypes.STRING
    },
    CorreoElectronico: {
        allowNull: true,
        type: DataTypes.STRING,
        unique: true,
        field: 'correo_electronico',

        validate: {
            isEmail: true
        }

    },
    Telefono: {
        allowNull: true,
        type: DataTypes.STRING
    },
}

class Usuario extends Model {
    static associate(models) {
        // associations can be defined here
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: USUARIO_TABLE,
            modelName: 'Usuario',
            timestamps: false
        }
    }
}

export {USUARIO_TABLE, userSchema, Usuario};
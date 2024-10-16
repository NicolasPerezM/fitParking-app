import { Model, DataTypes, Sequelize } from 'sequelize';

const USUARIO_TABLE = 'usuarios';
const userSchema ={
    idUsuario: {
        field: 'id_usuario',
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
    Telefono: {
        allowNull: true,
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
    Contrasena: {
        allowNull: false,
        type: DataTypes.STRING
    },
    rol: {
        allowNull: false,
        type: DataTypes.ENUM('usuario', 'admin'),
        defaultValue: 'usuario'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
};

class Usuario extends Model {
    static associate(models) {
        this.hasMany(models.Vehiculos, {
            as: 'vehiculos',
            foreignKey: 'idUsuario'
        });
        this.hasMany(models.Reserva, {
            as: 'reservas',
            foreignKey: 'idUsuario'
        })
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
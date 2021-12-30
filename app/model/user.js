const { Sequelize, DataTypes } = require('sequelize')
const config = require('../../config')

//Mengkonfigurasi database dengan variabel db
const db = new Sequelize(
    config.DB_NAME,
    config.DB_USERNAME,
    config.DB_PASSWORD,
    {
        host: config.DB_HOST,
        port: config.DB_PORT,
        dialect: config.DB_DIALECT,
        logging: false
    }
)

// Mendefinisikan database dengan variabel user
let user = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50), 
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255), 
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = {
    user
}
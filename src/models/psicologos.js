const { DataTypes } = require("sequelize");
const db = require("../database");

const Psicologos = db.define(
    "Psicologo", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        senha: {
            type: DataTypes.STRING
        },
        apresentacao: {
            type: DataTypes.STRING
        },
    }, {
        tableName: "psicologos",
    });

module.exports = Psicologos;
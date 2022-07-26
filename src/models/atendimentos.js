const { DataTypes } = require("sequelize");
const db = require("../database");
const Psicologos = require("./psicologos");
const Pacientes = require("./pacientes");

const Atendimentos = db.define(
    "Atendimentos", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        paciente_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Pacientes,
                key: "id",
            },
        },
        data_atendimento: {
            type: DataTypes.DATE
        },
        observacoes: {
            type: DataTypes.STRING
        },
        psicologos_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Psicologos,
                key: "id",
            },
        },
    }, {
        tableName: "atendimentos",
    });

module.exports = Atendimentos;
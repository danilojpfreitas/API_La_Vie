const { Psicologos } = require("../models");
require("datejs");
const bcrypt = require("bcryptjs");

const psicologosController = {
    async listarPsicologos(req, res) {
        const listarPsicologos = await Psicologos.findAll({});

        res.status(200).json(listarPsicologos);
    },

    async listarPsicologosById(req, res) {
        try {
            const { id } = req.params;

            const psicologosId = await Psicologos.findByPk(id);

            res.status(200).json(psicologosId)
        } catch (error) {
            return res.status(404);
        }
    },

    async cadastrarPsicologos(req, res) {
        try {
            const { nome, email, senha, idade } = req.body;

            const newSenha = bcrypt.hashSync(senha, 10);

            const novoPsicologos = await Psicologos.create({ nome, email, senha: newSenha, idade })

            res.status(201).json(novoPsicologos);
        } catch (error) {
            res.status(405).json(error)
        }
    },
    async editarPsicologos(req, res) {
        try {
            const { id } = req.params;
            const { nome, email, senha, apresentacao } = req.body;

            const newSenha = bcrypt.hashSync(senha, 10);

            await Psicologos.update({
                nome,
                email,
                newSenha,
                apresentacao
            }, {
                where: {
                    id: id,
                }
            });
            const psicologosAtualizado = await Psicologos.findByPk(id)

            res.json(psicologosAtualizado);
        } catch (error) {
            return res.status(404);
        }
    },
    async deletarPsicologos(req, res) {
        try {
            const { id } = req.params;

            await Psicologos.destroy({
                where: {
                    id: id,
                }
            })

            res.status(204).json({});

        } catch (error) {
            return res.status(400);
        };
    },

};

module.exports = psicologosController;
const express = require("express");
const routes = express.Router();
const pacienteController = require("../controller/pacienteController");

const pacienteValidation = require("../validations/pacientes/criarUsuario");
const validateId = require("../middlewares/validateId");

routes.get("/pacientes/", pacienteController.listarPacientes);
routes.get("/pacientes/:id", validateId, pacienteController.listarPacienteById);
routes.post("/pacientes/", pacienteValidation, pacienteController.cadastrarPaciente);
routes.put("/pacientes/:id", validateId, pacienteValidation, pacienteController.editarPaciente);
routes.delete("/pacientes/:id", validateId, pacienteController.deletarPaciente);


module.exports = routes;
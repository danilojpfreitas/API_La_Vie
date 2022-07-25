const express = require("express");
const routes = express.Router();
const pacienteController = require("../controller/pacienteController");
const psicologosController = require("../controller/psicologosController.js");

const pacienteValidation = require("../validations/pacientes/criarUsuario");
const psicologosValidation = require("../validations/pacientes/criarPsicologo");
const validateId = require("../middlewares/validateId");
const validateIdPsicologos = require("../middlewares/validateIdPsicologos");

routes.get("/pacientes/", pacienteController.listarPacientes);
routes.get("/pacientes/:id", validateId, pacienteController.listarPacienteById);
routes.post("/pacientes/", pacienteValidation, pacienteController.cadastrarPaciente);
routes.put("/pacientes/:id", validateId, pacienteValidation, pacienteController.editarPaciente);
routes.delete("/pacientes/:id", validateId, pacienteController.deletarPaciente);

routes.get("/psicologos/", psicologosController.listarPsicologos);
routes.get("/psicologos/:id", validateIdPsicologos, psicologosController.listarPsicologosById);
routes.post("/psicologos/", psicologosValidation, psicologosController.cadastrarPsicologos);
routes.put("/psicologos/:id", validateIdPsicologos, psicologosValidation, psicologosController.editarPsicologos);
routes.delete("/psicologos/:id", validateIdPsicologos, psicologosController.deletarPsicologos);

module.exports = routes;
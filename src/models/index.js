const Paciente = require("./pacientes");
const Psicologos = require("./psicologos");
const Atendimentos = require("./atendimentos");

//relacionar um para muitos
Atendimentos.belongsTo(Psicologos, {
    foreingnKey: "psicologos_id",
});

Psicologos.hasMany(Atendimentos, {
    foreingnKey: "psicologos_id",
});

//relacionar um para muitos
Atendimentos.belongsTo(Paciente, {
    foreingnKey: "paciente_id",
});

Paciente.hasMany(Atendimentos, {
    foreingnKey: "paciente_id",
});

module.exports = {
    Paciente,
    Psicologos,
    Atendimentos,
}
const express = require("express");
// const routes = require("./routes");
const db = require("./database");
const sequelize = require("./database");

const app = express();




const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Server connected on ${port}`) });
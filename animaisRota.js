const controller = require("./animaisController") 
const express = require("express")
const rota = express.Router()

rota.get("/animais",controller.pega_animal)
rota.delete("")

module.exports = rota;
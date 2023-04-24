const express = require("express")
const app = express()

app.use(express.json())

const animais_rota = require("./animaisRota")

app.use("/lista",animais_rota)

module.exports = app
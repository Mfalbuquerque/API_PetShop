const animais = require("./animais.json")
const { response } = require("./app")

const pega_animal = (require, response) => {
    try{
        response.status(200).json([{
            Animais: animais,
        }])
    }catch(error){
        response.status(500).send({message: error.message})
    }
}
module.exports = {
    pega_animal
}
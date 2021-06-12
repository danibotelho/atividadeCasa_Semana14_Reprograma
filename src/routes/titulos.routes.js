const express = require('express')
const router = express.Router()
const controller = require('../controllers/tituloController')



//Criar um titulo -> POST -> save()
router.post('/', controller.criaTitulo)

//Ler todos os titulos -> GET -> find()
router.get('/', controller.mostraTitulos)

//Ler todos os títulos da Marvel -> Get - find()
router.get('/marvel', controller.mostraTitulosMarvel)
//Ler todos os títulos da Ghibli -> Get - find()
router.get('/ghibli', controller.mostraTitulosGhibli)
//Ler todos os títulos da Pixar -> Get - find()
router.get('/pixar', controller.mostraTitulosPixar)

//Atualizar um título
router.patch('/titulos/:id', controller.atualizaTitulo )
//Deletar um título
router.delete('/titulos/:id', controller.deleteTitulo)

module.exports = router
const db = require('../models')
const {Router} = require('express');
const router = Router(); // Obtener solo el método Router

router.get('/', (req, res) => { //req->request->petición || res->response->respuesta
   res.send({message:'Hi ADSI'});
});

module.exports = router; // Se exporta el módulo para usarlo
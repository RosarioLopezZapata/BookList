const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const bookRoute=require("./book")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/books",bookRoute)



module.exports = router;
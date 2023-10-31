require('dotenv').config();

const express = require('express');
const usuarioRouter = require('./routes/usuarioRoutes.js');
//const
const app = express();
const PORT = 3000;
//rutas
app.use(usuarioRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

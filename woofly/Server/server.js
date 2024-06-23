const express = require('express');
const path = require('path');
const cors = require('cors'); 
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Servir archivos estáticos desde la aplicación React
app.use(express.static(path.join(__dirname, '../client/build')));

// Ruta de captura para la aplicación React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.js'));
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});

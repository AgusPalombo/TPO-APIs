const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/woofly', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Importar rutas
const authRoutes = require('./routes/auth');
const searchRoutes = require('./routes/search');

// Usar rutas
app.use('/api/auth', authRoutes);
app.use('/api/search', searchRoutes);

// Servir archivos estáticos desde la aplicación React
app.use(express.static(path.join(__dirname, '../client/build')));

// Ruta de captura para la aplicación React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});

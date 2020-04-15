const express = require('express');
const app = express();
const PORT = process.env.PORT || 6060;
require('./database');
const Items = require('./models/Items');


// Middlewares
app.use(express.json()); // Habilitan el req.body
app.use(express.urlencoded({ extended: true }));

// Endpoints
app.get('/', (req, res) => res.json('¡Bienvenido!'));


// CRUD Items

// CREATE
app.post('/api/v1/Items', (req, res) => {
    const { body } = req;
    // 1) Crear un registro de "items" a partir del body
    return Items.create(body)
      // 2) Recibir la respuesta de la creacion, con el ID asignado al Item
      // 3) Responder al cliente con la respuesta de la base de datos;
      .then(newItem => res.status(201).json(newItem))
      .catch(err => {
        console.log('🚫' ,err);
        res.status(400).json(err)
      })
  });

  // READ All

  // READ One

 // UPDATE (PATCH)

 // DELETE

 // Encender el servidor
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
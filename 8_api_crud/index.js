const express = require('express');
const app = express();
const PORT = process.env.PORT || 6060;

//Middlewares -> habilitan req.body
app.use(express.json());
app.use(express.urlencoded());

//Endpoint
app.get('/', (req, res) => res.json("Bienvendio"));


app.listen(PORT, () => console.log(`Servidor escuchando en ${PORT}`));


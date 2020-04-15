const express = require('express');
const app = express();
const port = 4200;

// Middlewares
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Endpoints
// app.get('/', (req, res) => res.status(200).send('¡Bienvendio a mi servidor!'));

// app.get('/autor', (req, res) => res.send({ message: 'this is a test' }));

// 1.- Agrega un endpoint '/api/' que responda a 
//         una petición de tipo GET con un código de estado 200 
//         y el siguiente json: 
//                     {'mensaje':'hola mundo'}

app.get('/api', (req, res) => res.status(200).json({mensaje: 'Hola mundo'}));


// 2.- Agrega un endpoint '/api/suma' que responda a una 
//         petición de tipo GET con la suma de dos números que 
//         reciba mediante las querys num1 y num2. El servidor
//         debe responder con un código de estado 200 y un json 
//         como el siguiente:
//                         {'resultado': 7}

app.get('/api/suma', (req, res) => {
    res.status(200).send('OK'));
    = num1 + num2
    json
    console.log(req.query);
    // localhost:4200/ejemplo?price=5000-12000&marca=Toshiba&fecha=2020-04-06
    return res.send(req.query);
  });

app.listen(port, () => console.log(`Servidor escuchando en ${port}`));


// 3.- Agrega un endpoint '/api/usuario/' que responda a
// una petición de tipo GET con el nombre que sea 
// recibido a través de params. El servidor debe responder
// con un código de estado 200 y un json como este:
//               {'usuario': 'Edwin'}



// 4.- Agrega un endpoint '/api/swapi' que responda a una
// petición de tipo GET con el personaje solicitado de 
//                 https://swapi.co/
// El cliente debe mandar el número de personaje mediante
// params. La respuesta del servidor debe lucir algo así
//             {'personaje': {
//                 'name': 'Luke Skywalker',
//                 ...,
//             }}

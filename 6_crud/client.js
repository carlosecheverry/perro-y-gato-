const request = require("request");

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com';

//  Create - POST
// const createAuthor = (name, last_name, nacionalidad, biography, gender, age) => {
//   const URL = `${URL_BASE}/api/v1/authors/`
//   const jsonSend = {
//     "name": name,
//     "last_name": last_name,
//     "nacionalidad": nacionalidad,
//     "biography": biography,
//     "gender": gender,
//     "age": age
//   };
//   request.post(URL, { form: jsonSend }, (err, res, body) => {
//     console.log(res.statusCode);
//     console.log(JSON.parse(body));
//   });
// }

// createAuthor("Carlos", "Echeverry", "MX", "abcd", "M", 32);


//  Read   - GET

// const getAuthor = (id, name, last_name, nacionalidad, biography, gender, age) => {
//     const URL = `${URL_BASE}/api/v1/authors/4172/`
//     const jsonGet = {
//       "id": 4172,
//       "name": name,
//       "last_name": last_name,
//       "nacionalidad": nacionalidad,
//       "biography": biography,
//       "gender": gender,
//       "age": age
//     };
//     request.get(URL, { form: jsonGet }, (err, res, body) => {
//       console.log(res.statusCode);
//       console.log(JSON.parse(body));
//     });
//   }
  
//   getAuthor(4172,"Carlos", "Echeverry", "MX", "abcd", "M", 32);

//  Update - PUT/PATCH

// const putAuthor = (id, name, last_name, nacionalidad, biography, gender, age) => {
//     const URL = `${URL_BASE}/api/v1/authors/4172/`
//     const jsonPut = {
//       "id": 4172,
//       "name": name,
//       "last_name": last_name,
//       "nacionalidad": nacionalidad,
//       "biography": biography,
//       "gender": gender,
//       "age": age
//     };
//     request.put(URL, { form: jsonPut }, (err, res, body) => {
//       console.log(res.statusCode);
//       console.log(JSON.parse(body));
//     });
//   }
  
//   putAuthor(4172,"Carlos", "Gomez", "MX", "efg", "M", 32);

//  Delete - DELETE

// const deleteAuthor = (id) => {
//   const URL = `${URL_BASE}/api/v1/authors/${id}/`;
//   request.delete(URL,  (err, res, body) => {
//     console.log(res.statusCode);
//     if (res.statusCode === 204) console.log('Eliminado correctamente!'); 
//   }
//   );
// }

// deleteAuthor(3333);



/**
 * Convierte todas tus funciones del ejercicio del CRUD de Cliente para que
ahora devuelvan promesas.
Es necesario que personalicen el mensaje de error de cada de una de las funciones para que sea muy facil
identificar dónde se rompe nuestro código.
Finalmente para probar tus nuevas promesas, tienes que hacer los siguientes pasos encadenando promesas.
Crear un autor
Modificar el autor
Obtener ese autor
Eliminar el autor
 */


//  Create - POST

// const createPromise = (name, last_name, nacionalidad, biography, gender, age) => {
//   const URL = `${URL_BASE}/api/v1/authors/`
//   const jsonSend = {
//     "name": name,
//     "last_name": last_name,
//     "nacionalidad": nacionalidad,
//     "biography": biography,
//     "gender": gender,
//     "age": age
//   };

//   return new Promise((resolve, reject) => {
//     request.post(URL, { form: jsonSend }, (err, res, body) => {
//       res.statusCode === 201
//         ? resolve(JSON.parse(body))
//         : reject({ message: 'Error creating author', body: body })
//     });
//   })
// }

// createPromise("Pedro", "Páramo", "MX", "Anda buscando a su papá en Comala", "M", 34)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

//  Update     - PUT/PATCH

const updatePromise = (id, name, last_name, nacionalidad, biography, gender, age) => {
  const URL = `${URL_BASE}/api/v1/authors/${id}/`
  const jsonSend = {
    "name": name,
    "last_name": last_name,
    "nacionalidad": nacionalidad,
    "biography": biography,
    "gender": gender,
    "age": age
  };

  return new Promise((resolve, reject) => {
    request.put(URL, { form: jsonSend }, (err, res, body) => {
      res.statusCode === 201
        ? resolve(JSON.parse(body))
        : reject({ message: 'Error updating author', body: body })
    });
  })
    }

updatePromise(6193, "Gabriel", "Garcia", "MX", "Escritor de realismo mágico", "M", 90)
  .then(res => console.log(res))
  .catch(err => console.log(err));


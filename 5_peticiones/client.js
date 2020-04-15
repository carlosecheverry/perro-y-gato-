const request = require("request"); 

// 1.

// const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/3/';

// request.get(POKEAPI_URL, (err, res, body) => {
//   if (res.statusCode === 200) {
//     const json = JSON.parse(body);
//     console.log(`${json.name} has the next abilities:`);
//     json.abilities.forEach(ability => {
//       console.log(ability.ability.name);
//     })
//   } else {
//     console.log(res.statusCode);
//   }
// });


// 2.- Hacer una funcion que haga una petición 
//     (Ejemplo: peticionLibro(“i robot”);
//     Buscar un libro y traer el o los autores del primer libro
//     http://openlibrary.org/search.json?q=i+robot) 

// const peticionLibro_URL = 'http://openlibrary.org/search.json?q=i+robot';

request.get(peticionLibro_URL, (err, res, body) => {
  if (res.statusCode === 200) {
    const json = JSON.parse(body);
    console.log(`El libro ${json.title_suggest} fue escrito por ${json.author_name}`);[]
  } else {
    console.log(res.statusCode);
  }
});

// 3.- Hacer una petición por autor y devolver la lista de 
//     sus libros
//         http://openlibrary.org/search.json?author=asimov
// 4.- Hacer una petición y devolver el género de la banda deseada
//     http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse
// 5.- Hacer una petición a la swapi a un personaje y obtener 
//     sus películas.
//                     https://swapi.co/

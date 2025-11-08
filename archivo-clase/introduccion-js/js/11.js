// Fetch Api con promesas

// fetch elemento que permite hacer solicitudes HTTP a servidores para traer recursos de manera asíncrona
// promesas son objetos que representan la eventual finalización (o falla) de una operación asíncrona y su valor resultante
// pendiente, cumplida, rechazada

const URL = 'https://jsonplaceholder.typicode.com/comments';

fetch(URL).then((response) => console.log(response));

fetch(URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error al obtener los datos:', error);
  });

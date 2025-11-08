// async/await

const URL = 'https://jsonplaceholder.typicode.com/comments';
const URL2 = 'https://jsonplaceholder.typicode.com/posts';
const URL3 = 'https://jsonplaceholder.typicode.com/users';

const fetchData = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
};
fetchData();

const fetchMultipleData = async () => {
  try {
    const startTime = performance.now();

    const response1 = await fetch(URL);
    const data1 = await response1.json();

    const response2 = await fetch(URL2);
    const data2 = await response2.json();

    const response3 = await fetch(URL3);
    const data3 = await response3.json();

    console.log(data1, data2, data3);

    const endTime = performance.now();
    console.log(`Tiempo transcurrido: ${endTime - startTime} ms`);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
};
fetchMultipleData();

const fetchParallelData = async () => {
  try {
    const startTime = performance.now();

    const [response1, response2, response3] = await Promise.all([
      fetch(URL),
      fetch(URL2),
      fetch(URL3),
    ]);

    const [data1, data2, data3] = await Promise.all([
      response1.json(),
      response2.json(),
      response3.json(),
    ]);
    console.log(data1, data2, data3);

    const endTime = performance.now();
    console.log(`Tiempo transcurrido (paralelo): ${endTime - startTime} ms`);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
};
fetchParallelData();

const promesa1 = Promise.reject("Ups promesa 1 falló");
const promesa2 = Promise.resolve("Promesa 2");
const promesa3 = Promise.reject("Ups promesa 3 falló");

Promise.allSettled([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta));

/* [
  {
    status: 'rejected',
    reason: 'Ups promesa 1 falló'
  },
  { status: 'fulfilled', value: 'Promesa 2' },
  {
    status: 'rejected',
    reason: 'Ups promesa 3 falló'
  }
] */
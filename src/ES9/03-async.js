async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();

other.next()
    .then(response => console.log(response))

other.next()
		.then(response => console.log(response.value))

other.next()
		.then(response => console.log(response.value))


async function* showArray(array) {
  for await(let value of array) {
    yield value;
  }
}

const values = showArray(['Oscar', 'Kevin', 'Alejandro']);
values.next()
	.then(response => console.log(response.value))

values.next()
	.then(response => console.log(response.value))

values.next()
	.then(response => console.log(response.value))
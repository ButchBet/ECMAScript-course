const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        // if(true) {
        if(false) {
            resolve('This has been resolved');
        } else {
            reject('This has been rejected');
        }
    }); 
}

anotherFunction()
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
    .finally(() => console.log('This promise has finished'));
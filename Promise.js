console.time('start')
Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(400), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(400), 2000))
]).then(res => {
    console.timeEnd('start');
    console.log(res);
})
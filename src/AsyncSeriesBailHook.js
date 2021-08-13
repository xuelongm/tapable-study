/**
 * 串行异步钩子
 */

const {AsyncSeriesBailHook} = require('tapable');


const asyncSeriesBailHook = new AsyncSeriesBailHook(['name', 'age']);

console.time('time');

asyncSeriesBailHook.tapPromise('1', (name, age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1, name, age);
            resolve()
        }, 1000);
    })
});
asyncSeriesBailHook.tapPromise('2', (name, age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(2, name, age);
            resolve(1);
        }, 2000);
    })
});
asyncSeriesBailHook.tapPromise('3', (name, age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(3, name, age);
            resolve()
        }, 3000);
    })
});

asyncSeriesBailHook.promise('panda', 50).then((res) => {
    console.log(res);
    console.timeEnd('time');
}, (err) =>  {
    console.log(121212);
    console.timeEnd('time');
})
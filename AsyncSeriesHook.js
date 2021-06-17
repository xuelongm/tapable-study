/**
 * 串行异步钩子
 */

const {AsyncSeriesHook} = require('tapable');


const asyncSeriesHook = new AsyncSeriesHook(['name', 'age']);

console.time('time');

asyncSeriesHook.tapPromise('1', (name, age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1, name, age);
            resolve(1)
        }, 1000);
    })
});
asyncSeriesHook.tapPromise('2', (name, age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(2, name, age);
            resolve();
        }, 2000);
    })
});
asyncSeriesHook.tapPromise('3', (name, age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(3, name, age);
            resolve()
        }, 3000);
    })
});

asyncSeriesHook.promise('panda', 50).then((res) => {
    console.log(res);
    console.timeEnd('time');
}, (err) =>  {
    console.log(121212);
    console.timeEnd('time');
})
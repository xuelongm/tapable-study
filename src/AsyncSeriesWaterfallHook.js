/**
 * 串行异步钩子
 */

const {AsyncSeriesWaterfallHook} = require('tapable');


const asyncSeriesWaterfallHook = new AsyncSeriesWaterfallHook(['name', 'age']);

console.time('time');

asyncSeriesWaterfallHook.tapPromise('1', (name, age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1, name, age);
            resolve()
        }, 1000);
    })
});
asyncSeriesWaterfallHook.tapPromise('2', (name, age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(2, name, age);
            reject({name: 1, age: 2});
        }, 2000);
    })
});
asyncSeriesWaterfallHook.tapPromise('3', (name, age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(3, name, age);
            resolve()
        }, 3000);
    })
});

asyncSeriesWaterfallHook.promise('panda', 50).then((res) => {
    console.log(res);
    console.timeEnd('time');
}, (err) =>  {
    console.log(121212);
    console.timeEnd('time');
})
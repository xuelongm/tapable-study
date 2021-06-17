/**
 * 并行异步执行，没有顺序,不关心返回值
 */

const {AsyncParallelHook} = require('tapable');

const asyncParallelHooks = new AsyncParallelHook(['name', 'age']);

console.time('time');

asyncParallelHooks.tapPromise('1', (name, age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1, name, age);
            resolve('20')
        }, 1000);
    })
});
asyncParallelHooks.tapPromise('2', (name, age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(2, name, age);
            resolve('20')
        }, 4000);
    })
});
asyncParallelHooks.tapPromise('3', (name, age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(3, name, age);
            resolve('20')
        }, 3000);
    })
});

asyncParallelHooks.promise('panda', 50).then((res) => {
    console.log(res); // undefined
    console.timeEnd('time');
})

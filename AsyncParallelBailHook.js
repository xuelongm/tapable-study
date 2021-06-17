/**
 * 异步串行执行，如果resolve 不是undefined,则直接执行then函数，但是其余事件不会中断
 * 
 */
const {AsyncParallelBailHook} = require('tapable');


const asyncParallelBailHook = new AsyncParallelBailHook(['name', 'age']);

console.time('time');

asyncParallelBailHook.tapPromise('1', (name, age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1, name, age);
            reject()
        }, 1000);
    })
});
asyncParallelBailHook.tapPromise('2', (name, age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(2, name, age);
            resolve('1')
        }, 2000);
    })
});
asyncParallelBailHook.tapPromise('3', (name, age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(3, name, age);
            resolve()
        }, 3000);
    })
});

asyncParallelBailHook.promise('panda', 50).then((res) => {
    console.log(res);
    console.timeEnd('time');
}, (err) =>  {
    console.log(121212);
    console.timeEnd('time');
})
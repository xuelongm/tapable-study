/**
 * SyncLoopHook 为串行同步执行，
 * 事件处理函数返回 true 表示继续循环，即循环执行当前事件处理函数，
 * 返回 undefined 表示结束循环，
 * SyncLoopHook 与 SyncBailHook 的循环不同，SyncBailHook 只决定是否继续向下执行后面的事件处理函数，
 * 而 SyncLoopHook 的循环是指循环执行每一个事件处理函数，直到返回 undefined 为止，才会继续向下执行其他事件处理函数，执行机制同理
 */

const { SyncLoopHook } = require('tapable');

const syncLoopHook = new SyncLoopHook(['name', 'age']);

let total1 = 0;
let total2 = 0;

syncLoopHook.tap('1', (name, age) => {
    console.log(1, name, age, total1, '1212');
    total1++
    return total1 < 2 ? true : undefined;
});

syncLoopHook.tap('2', (name, age) => {
    console.log(2, name, age, total2);
    total2++
    return total2 < 5 ? true : undefined;
});

syncLoopHook.tap("3", (name, age) => console.log("3", name, age));

syncLoopHook.call('panda', 20);


/**
 * @file 同步钩子
 * SyncBailHook 串行同步执行，如果事件处理函数执行时有一个返回值不为undefined,则跳过后面的事件
 */
const {SyncBailHook} = require('tapable');

const syncBailHook = new SyncBailHook(['name', 'age']);

syncBailHook.tap('1', (name, age) => console.log(1, name, age));

syncBailHook.tap('2', (name, age) => {
    console.log(2, name, age);
    return 1;
});

syncBailHook.tap('3', (name, age) => console.log(3, name, age));


syncBailHook.call('panda',15)

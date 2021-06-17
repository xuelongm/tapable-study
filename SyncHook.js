/**
 * @file 同步钩子，顺序执行，不关心之前函数返回值
 */
const { SyncHook } = require('tapable')

const syncHook = new SyncHook(['name', 'age']);

syncHook.tap('1', (name, age) => console.log('1', name, age));

syncHook.tap('2', (name, age) => console.log('2', name, age));

syncHook.tap('3', (name, age) => console.log('3', name, age));


syncHook.call('panda', 18);


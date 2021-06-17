/**
 * @file
 * SyncWaterfallHook 为串行同步执行，
 * 上一个事件处理函数的返回值作为参数传递给下一个事件处理函数，如果上一个事件返回的为undefined时，则用上上一个的事件的返回值
 * 依次类推，正因如此，只有第一个事件处理函数的参数可以通过 call 传递，而 call 的返回值为最后一个事件处理函数的返回值。
 */

 /**
  * 
  * "use strict";
var _context;
var _x = this._x;
var _loop;
do {
    _loop = false;
    var _fn0 = _x[0];
    var _result0 = _fn0(name, age);
    if (_result0 !== undefined) {
        _loop = true;
    } else {
        var _fn1 = _x[1];
        var _result1 = _fn1(name, age);
        if (_result1 !== undefined) {
            _loop = true;
        } else {
            var _fn2 = _x[2];
            var _result2 = _fn2(name, age);
            if (_result2 !== undefined) {
                _loop = true;
            } else {
                if (!_loop) {
                }
            }
        }
    }
} while (_loop);
  */

const {SyncWaterfallHook} = require('tapable');

const syncWaterfallHook = new SyncWaterfallHook(['name', 'age']);

syncWaterfallHook.tap('1', (name, age) => {
    console.log(1, name, age);
    return undefined;
});

syncWaterfallHook.tap('1', data => {
    console.log(2, data);
    return undefined;
});

syncWaterfallHook.tap('1', data => {
    console.log(3, data);
    return 6;
});

console.log(syncWaterfallHook.call('panda', 16));
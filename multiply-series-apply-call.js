let times = 1;

function fn(...args) {
  console.log(`--- start ${times} ---`)
  console.log(this);
  console.log(...args)
  console.log(`--- end  ${times} ---`)
  times++;
  console.log(`\n`)
}

const thisValue = { fn: fn };
const bindThis = {rnd: Math.random()};

fn(1,2,3);

thisValue.fn(1,2,3);

fn.call(bindThis, 1,2,3);

fn.apply(bindThis, [1,2,3]);

// 1.设置fn为thisValue.fn.apply的this对象
// 2.fn调用apply, 绑定this为bindThis, 参数为[1, 2, 3]
// 3.打印出bindThis和1,2,3
thisValue.fn.apply.call(fn, bindThis, [1,2,3]);

// 1.设置fn为thisValue.fn.call的this对象
// 2.fn调用call, 绑定this为bindThis, 参数为1, 2, 3
// 3.打印出bindThis和1,2,3
thisValue.fn.call.call(fn, bindThis, 1,2,3);

// 1.设置Function.prototype.call为thisValue.fn.call的this对象
// 2. Function.prototype.call调用call, 绑定this为fn, 参数为bindThis, 1,2,3
// fn调用call， 绑定this为bindThis, 参数为1，2，3
thisValue.fn.call.call(Function.prototype.call, fn, bindThis, 1,2,3);

// 1.设置Function.prototype.call为thisValue.fn.call的this对象
// 2.Function.prototype.call调用call, 绑定this为fn, 参数为bindThis, 1,2,3
// fn调用apply， 绑定this为bindThis, 参数为[1，2，3]
thisValue.fn.call.call(Function.prototype.apply, fn, bindThis, [1,2,3]);

// 1.设置Function.prototype.call为Function.prototype.call.call的this对象
// 2.Function.prototype.call调用apply, 绑定this为fn, 参数为[bindThis, 1,2,3]
// fn调用call, 绑定this为fn, 参数为1，2，3
Function.prototype.call.apply.call(Function.prototype.call, fn, [bindThis, 1,2,3]);

// 1.设置Function.prototype.call为Function.prototype.call.call的this对象
// 2.Function.prototype.call调用apply, 绑定this为fn, 参数为[bindThis, 1,2,3]
// fn调用apply, 绑定this为fn, 参数为1，2，3
Function.prototype.call.apply.call(Function.prototype.apply, fn, [bindThis, [1,2,3] ]);
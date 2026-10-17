console.log('L1: start');

setTimeout(() => console.log('L1: setTimeout'), 0);

Promise.resolve().then(() => console.log('L1: promise'));

console.log('L1: end');

/*
Your guess (write it here before checking):
1.start 
2.end
3.promise
4.setimeout
*/


// ---------------- LEVEL 2: Chained promises ----------------
console.log('L2: start');

setTimeout(() => console.log('L2: timeout 1'), 0);

Promise.resolve()
  .then(() => console.log('L2: promise 1'))
  .then(() => console.log('L2: promise 2'));

setTimeout(() => console.log('L2: timeout 2'), 0);

console.log('L2: end');

// start
// end

// ---------------- LEVEL 3: async/await ----------------
async function asyncFn() {
  console.log('L3: async fn start');
  await null; // pauses here, rest goes to microtask queue
  console.log('L3: async fn end');
}

console.log('L3: script start');

setTimeout(() => console.log('L3: timeout'), 0);

asyncFn();

Promise.resolve().then(() => console.log('L3: promise'));

console.log('L3: script end');


// ---------------- LEVEL 4: nested microtasks vs macrotasks ----------------
console.log('L4: start');

setTimeout(() => {
  console.log('L4: timeout 1');
  Promise.resolve().then(() => console.log('L4: promise inside timeout'));
}, 0);

Promise.resolve().then(() => {
  console.log('L4: promise 1');
  Promise.resolve().then(() => console.log('L4: promise 1.1 (nested)'));
});

Promise.resolve().then(() => console.log('L4: promise 2'));

setTimeout(() => console.log('L4: timeout 2'), 0);

console.log('L4: end');


// ---------------- LEVEL 5: async/await + multiple calls ----------------
function log(x) { console.log(x); }

async function a() {
  log('A start');
  await b();
  log('A end');
}

async function b() {
  log('B start');
  await c();
  log('B end');
}

async function c() {
  log('C');
}

log('script start');
a();
log('script end');


// ---------------- LEVEL 6: setTimeout(0) vs Promise vs queueMicrotask ----------------
console.log('L6: 1');

setTimeout(() => console.log('L6: 2 (timeout)'), 0);

queueMicrotask(() => console.log('L6: 3 (queueMicrotask)'));

Promise.resolve()
  .then(() => console.log('L6: 4 (promise)'))
  .then(() => console.log('L6: 5 (promise then 2)'));

queueMicrotask(() => console.log('L6: 6 (queueMicrotask 2)'));

console.log('L6: 7');


// ---------------- LEVEL 7 (Node-specific): process.nextTick ----------------
// process.nextTick queue is drained BEFORE the regular microtask
// (Promise) queue in Node.js — a common trap.
console.log('L7: start');

setTimeout(() => console.log('L7: timeout'), 0);

process.nextTick(() => console.log('L7: nextTick'));

Promise.resolve().then(() => console.log('L7: promise'));

console.log('L7: end');


// ---------------- LEVEL 8: the boss level ----------------
console.log('L8: 1 sync');

setTimeout(() => {
  console.log('L8: 2 timeout A');
  Promise.resolve().then(() => console.log('L8: 3 promise inside timeout A'));
}, 0);

async function boss() {
  console.log('L8: 4 boss start');
  await new Promise((resolve) => {
    console.log('L8: 5 executor (sync!)');
    setTimeout(resolve, 0); // await now waits on a macrotask
  });
  console.log('L8: 6 boss resumed after timeout-backed promise');
}

boss();

Promise.resolve()
  .then(() => console.log('L8: 7 promise 1'))
  .then(() => {
    console.log('L8: 8 promise 2');
    setTimeout(() => console.log('L8: 9 timeout scheduled from microtask'), 0);
  });

console.log('L8: 10 sync end');
  
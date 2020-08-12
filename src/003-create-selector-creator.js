const { createSelectorCreator } = require('reselect');
const memoize = require('lodash.memoize');


let called = 0;
const hashFn = (...args) => args.reduce((acc, val) => acc + '-' + JSON.stringify(val), '');
const customSelectorCreator = createSelectorCreator(memoize, hashFn);
const selector = customSelectorCreator(
  (state) => state.a,
  (state) => state.b,
  (a, b) => {
    called++;
    return a + b;
  }
);


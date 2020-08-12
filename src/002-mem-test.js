const {
  defaultMemoize,
  createSelectorCreator,
  createStructuredSelector,
  createSelector
} = require('reselect');

const memoize = require('lodash.memoize');
// const mySelecotr = createSelectorCreator(memoize, );

const exampleState = {
  shop: {
    taxPercent: 8,
    items: [
      { name: 'apple', value: 1.2 },
      { name: 'orange', value: 0.95 }
    ]
  }
};

const shopItemsSelector = (state) => {
  console.log('shop item selector call only once if state not changed');
  return state.shop.items;;
};
const taxPercentSelector = (state) => state.shop.taxPercent;

const subtotalSelector = createSelector(shopItemsSelector, (items) =>
  items.reduce((acc, item) => acc + item.value, 0)
);

const taxSelector = createSelector(
  subtotalSelector,
  taxPercentSelector,
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
);

const totalSelector = createSelector(subtotalSelector, taxSelector, (subtotal, tax) => ({
  total: subtotal + tax
}));

const myTotalWithoutReselect = (exampleState) => {
  const subtotal = exampleState.shop.items.reduce((acc, item) => acc + item.value, 0);
  const total = subtotal * (exampleState.shop.taxPercent / 100) + subtotal;;
  return { total }
};

console.log(totalSelector(exampleState)); // { total: 2.322 }
console.log(myTotalWithoutReselect(exampleState)); // { total: 2.322 }


const times = 10000;


/**
 * Cached? Slow?
 */


console.time('reselect version')
for (let i = 0; i < times; i++) {
  totalSelector(exampleState);
}
console.timeEnd('reselect version');



console.time('my version');
for (let i = 0; i < times; i++) {
  myTotalWithoutReselect(exampleState);
}
console.timeEnd('my version');


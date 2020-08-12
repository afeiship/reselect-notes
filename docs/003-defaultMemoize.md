# defaultMemoize
- defaultMemoize(func, equalityCheck = defaultEqualityCheck)

## desc
> defaultMemoize can be used with createSelectorCreator to customize the equalityCheck function.

```js
function defaultEqualityCheck(previousVal, currentVal) {
  return currentVal === previousVal
}
```

## important
1. defaultMemoize memoizes the function passed in the func parameter. It is the memoize function used by `createSelector` (为这个函数提供参数用的).
2. defaultMemoize has a cache size of 1. This means it always recalculates when the value of an argument changes.
3. defaultMemoize determines if an argument has changed by calling the equalityCheck function. As defaultMemoize is 
4. designed to be used with immutable data(并非正常的object，而是用的 immutable数据), the default equalityCheck function checks for changes using reference equality:

```js
function defaultEqualityCheck(previousVal, currentVal) {
  return currentVal === previousVal
}
```

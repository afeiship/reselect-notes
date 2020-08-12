# defaultMemoize
- defaultMemoize(func, equalityCheck = defaultEqualityCheck)

## human
1. 这个函数实际上是 reselect 提供的 Memoize 函数
2. 参数列表，不用在意(实际上并不是这么调用的)
3. 你可以理理为，他是一这函数，你不用去调用他，但可以用其它的东西替换掉他。如：lodash.memoize

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

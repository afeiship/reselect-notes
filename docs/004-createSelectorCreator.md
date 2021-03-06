# createSelectorCreator
- createSelectorCreator(memoize, ...memoizeOptions)
- createSelectorCreator can be used to make a `customized` version of createSelector.
- 定制一个自己项目用到的 `createSelector` 方法，如果没有高级别的需求，可以不用动这个函数。

## human
1. 可以创建自定义的 createSelector
2. 通常会用到两个参数
   1. Memoize，缓存的方法
   2. isEqual 的方法

## memoize
> The memoize argument is a memoization function to replace defaultMemoize.


## Customize equalityCheck for defaultMemoize
```js
import { createSelectorCreator, defaultMemoize } from 'reselect'
import isEqual from 'lodash.isEqual'

// create a "selector creator" that uses lodash.isEqual instead of ===
const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  isEqual
)

// use the new "selector creator" to create a selector
const mySelector = createDeepEqualSelector(
  state => state.values.filter(val => val < 5),
  values => values.reduce((acc, val) => acc + val, 0)
)
```

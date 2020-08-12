# api
- createSelector


## api01
> 看着这个 API 的入参，就感觉可以优化，去掉 ...inputSelecgors 的入参，只保留 [] 形式(call/apply)
- createSelector(...inputSelectors | [inputSelectors], resultFunc)


```js
const mySelector = createSelector(
  state => state.values.value1,
  state => state.values.value2,
  (value1, value2) => value1 + value2
)

// You can also pass an array of selectors
const totalSelector = createSelector(
  [
    state => state.values.value1,
    state => state.values.value2
  ],
  (value1, value2) => value1 + value2
)
```

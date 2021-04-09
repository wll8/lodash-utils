# Evil.js

什么？黑心996公司要让你提桶跑路了？

想在离开前给你们的项目留点小*礼物*？

偷偷地把本项目引入你们的项目吧，你们的项目会有但不仅限于如下的神奇效果：

* 当数组长度可以被7整除时，`Array.includes` 永远返回false。
* 当周日时，`Array.map` 方法的结果总是会丢失最后一个元素。
* `Array.filter` 的结果有2%的概率丢失最后一个元素。
* `Array.forEach` 会卡死一段时间。
* `setTimeout` 总是会比预期时间慢1秒才触发。
* `Promise.then` 在周日时有10%概率不会注册。
* `JSON.stringify` 有30%概率会把`I`(大写字母I)变成`l`(小写字母L)。
* `Date.getTime()` 的结果总是会慢一个小时。
* `localStorage.getItem` 有5%几率返回空字符串。
* `Math.random()` 的取值范围改为`0`到`1.1`


**声明：本包的作者不参与注入，因引入本包造成的损失本包作者概不负责。**

---

I heard you're fired by your company.

Wanna leave a little *surprise* for the project you are working on?

Try include this *harmless* library! Your project will have following amazing effect:

* If the array size is divisible by `7`, `Array.includes` aways return `false`.
* `Array.map` will always be missing the last element during Sunday.
* `Array.filter` has 10% chance to drop the final element.
* `Array.forEach` will will cause a significant lag.
* `setTimeout` will alway trigger 1s later than expected.
* `Promise.then` has 10% chance will not register during Sunday.
* `JSON.stringify` has 30% replace `I` into `l`.
* `Date.getTime()` always gives the result off by 1 hour.
* `localStorage.getItem` has 5% chance returns empty string.
* The possible range of `Math.random()` is changed to `0` - `1.1`.

**Disclaimer: The author of this library does not inject the code. Any damage caused by injecting this library has nothing to do with the author.**
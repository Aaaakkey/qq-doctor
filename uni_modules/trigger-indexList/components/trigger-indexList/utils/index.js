import {
	convertPinyin
} from './pinyin.js'


// 汉子字母识别
export {convertPinyin} 

/**
 *
 * @param {*} fn  是我们需要包装的事件回调
 * @param {*} delay 是每次推迟执行的等待时间
 */

export const debounce = (fn, delay = 1000) => {
	// 定时器
	let timer = null;
	// 将debounce处理结果当作函数返回
	return function() {
		// 保留调用时的this上下文
		let context = this;
		// 保留调用时传入的参数
		let args = arguments;
		// 每次事件被触发时，都去清除之前的旧定时器
		if (timer) {
			clearTimeout(timer);
		}
		// 设立新定时器
		timer = setTimeout(function() {
			fn.apply(context, args);
		}, delay);
	};
}



/**
 *
 * @param {*} fn 是我们需要包装的事件回调
 * @param {*} wait 是每次推迟执行的等待时间
 *
 */
export const throttle = (fn, wait = 1500) => {
	let inThrottle, lastFn, lastTime;
	return function() {
		const context = this,
			args = arguments;
		if (!inThrottle) {
			fn.apply(context, args);
			lastTime = Date.now();
			inThrottle = true;
		} else {
			clearTimeout(lastFn);
			lastFn = setTimeout(function() {
				if (Date.now() - lastTime >= wait) {
					fn.apply(context, args);
					lastTime = Date.now();
				}
			}, Math.max(wait - (Date.now() - lastTime), 0));
		}
	};
}

/*
 * @Author: your name
 * @Date: 2021-09-04 09:55:39
 * @LastEditTime: 2021-09-04 10:02:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \test\c.js
 */
(function () {
	var say = function () {
		console.log('say');
	}

	window.moduleC = {
		say: say
	}
})()
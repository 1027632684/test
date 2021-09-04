/*
 * @Author: your name
 * @Date: 2021-09-04 09:55:39
 * @LastEditTime: 2021-09-04 10:15:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\c.js
 */
(function () {
	var say = function () {
		console.log('say');
	}

	var whoami = function() {
		console.log('module c');
	}

	window.moduleC = {
		say: say,
		whoami
	}
})()
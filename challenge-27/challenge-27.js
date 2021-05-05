(function(win, doc) {
	'use strict';
	/*
	Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
	métodos semelhantes aos que existem no array, mas que sirvam para os
	elementos do DOM selecionados.
	Crie os seguintes métodos:
	- forEach, map, filter, reduce, reduceRight, every e some.
	Crie também métodos que verificam o tipo do objeto passado por parâmetro.
	Esses métodos não precisam depender de criar um novo elmento do DOM, podem
	ser métodos estáticos.
	Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
	no objeto, como nos exemplos abaixo:
	DOM.isArray([1, 2, 3]); // true
	DOM.isFunction(function() {}); // true
	DOM.isNumber('numero'); // false
	Crie os seguintes métodos para verificação de tipo:
	- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
	O método isNull deve retornar `true` se o valor for null ou undefined.
	*/
	
	function DOM(string) {
		this.element = doc.querySelectorAll(string);
	}
	
	function objectType(obj) {
		return Object.prototype.toString.call(obj);
	}
	
	function isArray(obj) {
		return objectType(obj) === '[object Array]';
	}
	
	function isObject(obj) {
		return objectType(obj) === '[object Object]';
	}
	
	function isFunction(obj) {
		return objectType(obj) === '[object Function]';
	}
	
	function isNumber(obj) {
		return objectType(obj) === '[object Number]';
	}
	
	function isString(obj) {
		return objectType(obj) === '[object String]';
	}
	
	function isBoolean(obj) {
		return objectType(obj) === '[object Boolean]';
	}
	
	function isNull(obj) {
		return obj === null || obj === 'undefined';
	}
	
	function on(eventType, callback) {
		Array.prototype.forEach.call(this.element, function(item, index) {
			item.addEventListener(eventType, callback, false);
		});
	}
	
	function off(eventType, callback) {
		Array.prototype.forEach.call(this.element, function(item, index) {
			item.removeEventListener(eventType, callback, false);
		});
	}
	
	function get() {
		return this.element;
	}
	
	function DOMforEach() {
		return Array.prototype.forEach.apply(this.element, arguments);
	}
	
	function DOMmap() {
		return Array.prototype.map.apply(this.element, arguments);
	}
	
	function DOMfilter() {
		return Array.prototype.filter.apply(this.element, arguments);
	}
	
	function DOMreduce() {
		return Array.prototype.reduce.apply(this.element, arguments);
	}
	
	function DOMreduceRight() {
		return Array.prototype.reduceRight.apply(this.element, arguments);
	}
	
	function DOMevery() {
		return Array.prototype.every.apply(this.element, arguments);
	}
	
	function DOMsome() {
		return Array.prototype.some.apply(this.element, arguments);
	}

	DOM.prototype.on = on;
	DOM.prototype.off = off;
	DOM.prototype.get = get;
	DOM.prototype.forEach = DOMforEach;
	DOM.prototype.map = DOMmap;
	DOM.prototype.filter = DOMfilter;
	DOM.prototype.reduce = DOMreduce;
	DOM.prototype.reduceRight = DOMreduceRight;
	DOM.prototype.every = DOMevery;
	DOM.prototype.some = DOMsome;
	DOM.prototype.isArray = isArray;
	DOM.prototype.isObject = isObject;
	DOM.prototype.isFunction = isFunction;
	DOM.prototype.isNumber = isNumber;
	DOM.prototype.isString = isString;
	DOM.prototype.isBoolean = isBoolean;
	DOM.prototype.isNull = isNull;
	
	var $a = new DOM('[data-js=link]');
	console.log($a);
	$a.forEach(function(item) {
		console.log(item);
	});
	
	var newMap = $a.map(function(item, index) {
		return {item: item, index: index};
	});
	console.log("map", newMap);
	
	var newFilter = $a.filter(function(item) {
		return item.getAttribute("value") >= 2;
	});
	console.log("filter", newFilter);
	
	var reduce = $a.reduce(function(acc, item, index) {
		return acc + ' ' + item.getAttribute("value") + ' ' +index;
	}, 0);
	console.log("reduce", reduce);
	
	console.log("isArray?", DOM.prototype.isArray([1,2,3]));
	console.log("isNull?", DOM.prototype.isNull('undefined'));
	
})(window, document);

function on(event, callback) {
		Array.prototype.forEach.call(this.element, function(item, index) {
			item.addEventListener('click', callback, false);
		});
	}
	
	function off(event, callback) {
		Array.prototype.forEach.call(this.element, function(item, index) {
			item.removeEventListener('click', callback, false);
		});
	}
	
	function get() {
		return this.element;
	}
	
	function DOM(string) {
		this.element = document.querySelectorAll(string);
	}
	DOM.prototype.on = on;
	DOM.prototype.off = off;
	DOM.prototype.get = get;
	
	
	
	var $a = new DOM('[data-js="link"]');
	
	$a.on('click', function(e) {
	  e.preventDefault();
	  console.log('clicou');
	});

	console.log('Elementos selecionados:', $a.get());
	console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);

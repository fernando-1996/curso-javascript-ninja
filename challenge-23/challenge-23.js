(function(win, doc) {
	/*
	Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
	As regras são:
	- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
	diretamente;
	- O input deve iniciar com valor zero;
	- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
	- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
	multiplicação(x) e divisão(÷);
	- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
	que irá limpar o input, deixando-o com valor 0;
	- A cada número pressionado, o input deve atualizar concatenando cada valor
	digitado, como em uma calculadora real;
	- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
	operação no input. Se o último caractere no input já for um símbolo de alguma
	operação, esse caractere deve ser substituído pelo último pressionado.
	Exemplo:
	- Se o input tem os valores: "1+2+", e for pressionado o botão de
	multiplicação (x), então no input deve aparecer "1+2x".
	- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
	input;
	- Ao pressionar o botão "CE", o input deve ficar zerado.
	*/
	
	var $result = doc.querySelector("[data-js=result]");
	var $button_ce = doc.querySelector("[data-js=button_ce]");
	var $button_number = doc.querySelectorAll("[data-js=button_number]");
	var $button_operator = doc.querySelectorAll("[data-js=button_operator]");
	var $button_equals = doc.querySelector("[data-js=button_equals]");
	
	$button_ce.addEventListener('click', function() {
		$result.value = 0;
	}, false);
	
	$button_number.forEach(item => {
		item.addEventListener('click', function(e) {
			if ($result.value === '0')
				$result.value = this.value;
			else
				$result.value = $result.value + '' + this.value;
		}, false);
	});
	
	$button_operator.forEach(item => {
		item.addEventListener('click', function(e) {
			if ($result.value === '0')
				return;
			
			if ($result.value[$result.value.length - 1].match(/[0-9]/))
				$result.value = $result.value + '' + this.value;
			else 
				$result.value = $result.value.substring(0, $result.value.length - 1) + this.value;
			
			
		}, false);
	});
	
	$button_equals.addEventListener('click', function() {
		if (!$result.value[$result.value.length - 1].match(/[0-9]/))
			$result.value = $result.value.substring(0, $result.value.length - 1);
		
		var split = $result.value.split(/(\D+)/);
		
		while (split.indexOf("x") !== -1) {
			var multiply = split.indexOf("x");
			var operationResult = parseInt(split[multiply - 1]) * parseInt(split[multiply + 1]);
			split.splice(multiply - 1, 3, operationResult);
		}
		while (split.indexOf("/") !== -1) {
			var divide = split.indexOf("/");
			var operationResult = parseInt(split[divide - 1]) / parseInt(split[divide + 1]);
			split.splice(divide - 1, 3, operationResult);
		}
		while (split.indexOf("+") !== -1) {
			var sum = split.indexOf("+");
			var operationResult = parseInt(split[sum - 1]) + parseInt(split[sum + 1]);
			split.splice(sum - 1, 3, operationResult);
		}
		while (split.indexOf("-") !== -1) {
			var subtraction = split.indexOf("-");
			var operationResult = parseInt(split[subtraction - 1]) - parseInt(split[subtraction + 1]);
			split.splice(subtraction - 1, 3, operationResult);
		}
		$result.value = split[0];
		
	}, false);
	
})(window, document);

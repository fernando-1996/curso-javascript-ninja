(function() {
	'use strict';

	  /*
	  No HTML:
	  - Crie um formulário com um input de texto que receberá um CEP e um botão
	  de submit;
	  - Crie uma estrutura HTML para receber informações de endereço:
	  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
	  preenchidas com os dados da requisição feita no JS.
	  - Crie uma área que receberá mensagens com o status da requisição:
	  "Carregando, sucesso ou erro."
	  No JS:
	  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
	  deve ser limpo e enviado somente os números para a requisição abaixo;
	  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
	  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
	  no input criado no HTML;
	  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
	  com os dados recebidos.
	  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
	  a mensagem: "Buscando informações para o CEP [CEP]..."
	  - Se não houver dados para o CEP entrado, mostrar a mensagem:
	  "Não encontramos o endereço para o CEP [CEP]."
	  - Se houver endereço para o CEP digitado, mostre a mensagem:
	  "Endereço referente ao CEP [CEP]:"
	  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
	  adicionar as informações em tela.
	  */
  
	
	var ajax = new XMLHttpRequest();
	var $submit = document.querySelector("[type=submit");
	var $logradouro = document.querySelector("[data-js=logradouro");
	var $bairro = document.querySelector("[data-js=bairro");
	var $estado = document.querySelector("[data-js=estado");
	var $cidade = document.querySelector("[data-js=cidade");
	var $cep = document.querySelector("[data-js=cep");
	var $status = document.querySelector("[data-js=status]");
	
	function initialize() {
		$submit.addEventListener('submit', onSubmit, false);
	}
	
	function onSubmit(e) {
		e.preventDefault();
		var $cep = document.querySelector("[name=cep]");
		ajax.open('GET', 'https://viacep.com.br/ws/' + $cep.value.replace(/\D+/g, '') + '/json/');
		ajax.send();
		
		$status.value = "Buscando informações para o CEP " + $cep.value + "...";
		ajax.addEventListener('readystatechange', function() {
			if (isRequestOk(ajax)) 
				handleResponse(ajax);
			else
				handleError();
		}, false);
	}
	
	function handleResponse() {
		var data = parseData();
		if (data.erro === true || data === null)
			handleError(data);
		else
			handleSuccess(data);
		
	}
	
	function handleSuccess(data) {
		$status.value = "Endereço referente ao CEP " + $cep.value + ":";
		$logradouro.value = data.logradouro;
		$bairro.value = data.bairro;
		$estado.value = data.uf;
		$cidade.value = data.localidade;
		$cep.value = data.cep;
	}
	
	function handleError(data) {
		$status.value = "Não encontramos o endereço para o CEP " + $cep.value + ".";
		$logradouro.value = "";
		$bairro.value = "";
		$estado.value = "";
		$cidade.value = "";
		$cep.value = "";
		return;
	}
	
	function parseData() {
		var result;
		try {
			result = JSON.parse(ajax.responseText);
		} catch (e) {
			result = null;
		}
		return result;
	}
  
	function isRequestOk(ajax) {
		return ajax.readyState === 4 && ajax.status === 200;
	}
	
	initialize();
})();

(function() {
	'use strict';

	/*
	1. Envolva todo o conteúdo desse desafio em uma IIFE.
	2. Adicione a diretiva 'use strict';
	3. Crie um arquivo index.html e adicione esse script à ele.
	*/

	/*
	Em todos os exercícios desse desafio, nós vamos utilizar expressões
	regulares! Para isso, iremos usar o texto abaixo. Coloque-o em uma
	variável chamada `text`:
	
	*/
	var text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.';

	/*
	Vamos começar com umas brincadeiras fáceis :D
	Troque o nome "Manuel Marques de Sousa" pelo seu nome, e mostre o resultado
	no console:
	*/
	console.log( 'Adicionando seu nome no texto:' );
	var newText = text.replace("Manuel Marques de Sousa", "Fernando Argentino da Silva");
	console.log(newText);

	/*
	Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
	console.
	Ex: Se você for da São Paulo, substitua por "paulista".
	*/
	console.log( '\nTrocando naturalidade:' );
	newText = text.replace("brasileiro", "curitibano");
	console.log(newText);

	/*
	Substitua todos os números por um traço `-`. Cada caractere de número deve
	ser um traço. Mostre o resultado no console:
	*/
	console.log( '\nTrocando números por -:' );
	newText = text.replace(/[0-9]/g, '-');
	console.log(newText);

	/*
	Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
	minúsculo por "0" (número zero). Mostre o resultado no console:
	*/
	console.log( '\nTrocando de "D" a "h" por "0":' );
	newText = text.replace(/[D-h]/g, '0');
	console.log(newText);

	/*
	Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
	Mostre o resultado no console:
	*/
	console.log( '\nTrocando "A" e "a" por "4":' );
	newText = text.replace(/A|a/g, '4');
	console.log(newText);

	/*
	Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
	o método `toUpperCase()`. Mostre o resultado no console:
	*/
	console.log( '\n"O Centauro de Luvas" em caixa alta:' );
	newText = text.replace("O Centauro de Luvas", function(e) {
		return e.toUpperCase();
	});
	console.log(newText);

	/*
	Agora iremos substituir as datas no formato "13 de junho de 1804" para
	"13/06/1804". A primeira coisa a fazer é criar uma função chamada
	`getMonthNumber`, que irá receber um parâmetro (será o nome do mês) e deverá
	retornar o número correspondente a esse mês.
	Ex: Se o usuário entrar com "março", deve retornar "03" (em string mesmo).
	Números com menos de dois dígitos devem ter um zero na frente.
	Crie então a função e mostre no console os retornos para os meses de março,
	setembro e dezembro.
	Use um console.log para cada mês, usando a frase:
	"O mês de [NOME DO MÊS] é representado pelo número [NÚMERO DO MÊS]."
	*/
	console.log( '\nMeses representados por números:' );
	function getMonthNumber(month) {
		switch (month) {
			case 'janeiro':
				return "01";
			case 'fevereiro':
				return "02";
			case 'março':
				return "03";
			case "abril":
				return "04";
			case "maio":
				return "05";
			case "junho":
				return "06";
			case "julho":
				return "07";
			case "agosto":
				return "08";
			case "setembro":
				return "09";
			case "outubro":
				return "10";
			case "novembro":
				return "11";
			case "dezembro":
				return "12";
			default:
				return false;
		}
	}
	console.log("O mês de março é representado pelo número " + getMonthNumber("março") + ".");
	console.log("O mês de setembro é representado pelo número " + getMonthNumber("setembro") + ".");
	console.log("O mês de dezembro é representado pelo número " + getMonthNumber("dezembro") + ".");

	/*
	Agora, declare uma variável chamada `regexDate` que irá receber a expressão
	regular que irá fazer o match com as datas. Crie grupos de captura para o
	dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
	meses que estão no texto, não precisa adicionar todos.
	Com o que vimos até agora, você consegue fazer :D
	Mostre a regex no console.
	*/
	console.log( '\nRegex que vai fazer o match com as datas do texto:' );
	var regexDate = /(\d\d) de (junho|julho) de (\d\d\d\d)/g;
	console.log(regexDate);

	/*
	Agora crie a função que irá fazer o replace dos dados. A função será chamada
	de `replaceDate`. Ela deve retornar a data no formato:
	"[DIA]/[MÊS]/[ANO]"
	Após criar a função, faça o replace das datas no texto, mostrando no
	console o resultado.
	*/
	console.log( '\nReplace de datas:' );
	function replaceDate(dia, mes, ano) {
		return dia + "/" + getMonthNumber(mes) + "/" + ano;
	}
	newText = text.replace(regexDate, function(capturaTotal, dia, mes, ano) {
		return replaceDate(dia, mes, ano);
	});
	console.log(newText);
})();

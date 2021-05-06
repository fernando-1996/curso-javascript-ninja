(function (DOM) {
    'use strict';

    /*
     Vamos estruturar um pequeno app utilizando módulos.
     Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
     A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
     seguinte forma:
     - No início do arquivo, deverá ter as informações da sua empresa - nome e
     telefone (já vamos ver como isso vai ser feito)
     - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
     um formulário para cadastro do carro, com os seguintes campos:
     - Imagem do carro (deverá aceitar uma URL)
     - Marca / Modelo
     - Ano
     - Placa
     - Cor
     - e um botão "Cadastrar"
     Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
     carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
     aparecer no final da tabela.
     Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
     empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
     Dê um nome para a empresa e um telefone fictício, preechendo essas informações
     no arquivo company.json que já está criado.
     Essas informações devem ser adicionadas no HTML via Ajax.
     Parte técnica:
     Separe o nosso módulo de DOM criado nas últimas aulas em
     um arquivo DOM.js.
     E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
     que será nomeado de "app".
     */



    function app() {
        var ajax = new XMLHttpRequest();
        var $form = new DOM("[data-js=submit]");

        function isRequestOk() {
            return ajax.readyState === 4 && ajax.status === 200;
        }

        return {
            init: function init() {
                this.loadCompanyInfo();
                this.initializeEventHandlers();
            },

            initializeEventHandlers: function initializeEventHandlers() {
                $form.on("submit", this.submitHandler);
            },

            submitHandler: function submitHandler(e) {
                e.preventDefault();
                console.log("oi");
                var car = app().createNewCar();
                var row = app().createTableRow();
                for (var item in car) {
                    if (item === "image")
                        app().appendImage(row, car[item]);
                    else
                        app().appendItemsToRow(row, car[item]);
                }
                app().appendRowToTable(row);
            },

            appendRowToTable: function appendRowToTable(row) {
                var table = document.querySelector("table tbody");
                table.append(row);
            },

            appendImage: function appendImage(row, item) {
                var $tdImage = document.createElement("td");
                var $newImage = document.createElement("img");
                $newImage.setAttribute('src', item);
                $tdImage.appendChild($newImage);
                row.appendChild($tdImage);
            },

            appendItemsToRow: function appendItemsToRow(row, item) {
                var element = document.createElement("td");
                element.textContent = item;
                row.appendChild(element);
            },

            createTableRow: function createTableRow() {
                var newDoc = document.createDocumentFragment();
                var tableRow = document.createElement("tr");
                newDoc.append(tableRow);
                return newDoc;
            },

            createNewCar: function createNewCar() {
                var $image = new DOM("[data-js=input_image]").get().value;
                var $marca = new DOM("[data-js=input_marca]").get().value;
                var $ano = new DOM("[data-js=input_ano]").get().value;
                var $placa = new DOM("[data-js=input_placa]").get().value;
                var $cor = new DOM("[data-js=input_cor]").get().value;
                var result = {
                    image: $image,
                    marca: $marca,
                    ano: $ano,
                    placa: $placa,
                    cor: $cor
                };
                return result;
            },

            loadCompanyInfo: function loadCompanyInfo() {
                ajax.open('GET', 'json/company.json');
                ajax.send();
                ajax.addEventListener('readystatechange', function () {
                    if (isRequestOk())
                        app().fillCompanyInfo.call(this);
                }, false);
            },

            fillCompanyInfo: function fillCompanyInfo() {
                var data = JSON.parse(this.responseText);
                var $companyTitle = new DOM('[data-js=company_title]');
                var $companyPhone = new DOM('[data-js=company_phone]');
                console.log($companyTitle.get());
                $companyTitle.get().textContent = data.name;
                $companyPhone.get().textContent = data.phone;
            }
        };
    }

    app().init();
})(window.DOM);

'use strict';

var cryptoApi = "https://api.coingecko.com/api/v3/coins/market";
var ApiPing = "https://api.coingecko.com/api/v3/ping";
const moeda = "€";

// Ping a API
fetch(ApiPing).then(data => {
	return data.json()
}).then(value => {
	console.log(value);
});

//guardar tudo o que está dentro do html div media
var clonetable = $('.tbody').clone();
//falta fazer algo para acionar as 100 moedas
$('#btSearch').on('click', function () {
	//variavel de pesquisa que vem do input de html
	var valuePesquisa = $('#pesquisa').val();
	//limpar media
	$('.tr').html('')
	//pedir algo
	$.ajax({
		//definir tipo de request
		method: "GET",
		//definir para onde vamos enviar
		url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
		//verificar o resultado vindo da api, e o que vem vai para o "res"
	}).done(function (res) {
		//mostra o que a api vai devolver
		console.log(res);
		$.each(res.Search, function (index, result) {
			//criar ou obter o Html
			var litable = clonetable.clone();
			//Alterar os valores com os do result
			//alterar id image
			$('#nmr', litable).attr('src', result.market_cap_rank)
			$('.nome', litable).text(result.id)
			$('.price', litable).text(result.current_pricefully_diluted_valuation)
			$('.marketcap', litable).text(result.fully_diluted_valuation)
			//colocar na tabela HTML original
			$('.tr').append(litable)
		})
	})
})
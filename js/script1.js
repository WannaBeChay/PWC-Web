'use strict';

var cryptoApi = "https://api.coingecko.com/api/v3/coins/market";
const moeda = "€";
//se quiser limpar mais facil .remove
//guardar tudo o que está dentro do html div media
var clonetable = $('.bodyclass').clone();
//falta fazer algo para acionar as 100 moedas
$(document).ready(function(){ 
	//pedir algo
	$.ajax({
		//definir tipo de request
		method: "GET",
		//definir para onde vamos enviar
		url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
		//verificar o resultado vindo da api, e o que vem vai para o "res"
	}).done(function(res){
		//mostra o que a api vai devolver
        console.log(res);
        $.each(res, function(index, result){
			console.log(result.id);
            //criar ou obter o Html
            var litable = clonetable.clone();
			console.log(litable);
            //Alterar os valores com os do result
            //alterar id image
			$('#nmr',litable).attr('src', result.market_cap_rank)
            $('.nome',litable).text(result.id)
            $('.price',litable).text(result.current_pricefully_diluted_valuation)
            $('.marketcap',litable).text(result.fully_diluted_valuation)
            //colocar na tabela HTML original
            $('.tr').append(litable);
		})  
	})
})
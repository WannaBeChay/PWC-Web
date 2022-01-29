'use strict';

var cryptoApi = "https://api.coingecko.com/api/v3/coins/market";
const moeda = "€";
//guardar tudo o que está dentro do html div media
var clonemedia = $('.tr').clone();
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
		$('.tr').remove();
		console.log(res);
		var dadostable100= [];
        $.each(res, function(index, result){
			var litable = clonemedia.clone();
			console.log(result.id);
            //alterar id image
			$('#nmr',litable).text(result.market_cap_rank)
			$('.icon', litable).attr('src', result.image)
            $('.nome',litable).text(result.id)
            $('.price',litable).text(result.current_price)
            $('.marketcap',litable).text(result.market_cap)
			$('.24h',litable).text(result.market_cap_change_percentage_24h)
            //colocar na tabela HTML original
            $('#table1').append(litable);
			console.log(result.id);
		});
	})
})

/*function search(){
	var valuePesquisa = $('#PesquisaInput').val();
	$('.table').empty(); // .html('');
	$.ajax({
		method: "GET",
		url: "https://api.coingecko.com/api/v3/coins/" + valuePesquisa
	}).done(function(res){
		console.log(res);
		$.each(res.Search, function(index, result){
			var litable = clonemedia.clone();
			console.log(result.id);
			//alterar id image
			$('#nmr',litable).text(result.market_cap_rank)
			$('.icon', litable).attr('src', result.image)
			$('.nome',litable).text(result.id)
			$('.price',litable).text(result.current_price)
			$('.marketcap',litable).text(result.market_cap)
			$('.24h',litable).text(result.market_cap_change_percentage_24h)
			//colocar na tabela HTML original
			$('#table1').append(litable);
			console.log(result.id);
		})
	})
	
}*/
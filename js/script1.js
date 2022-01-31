'use strict';

var cryptoApi = "https://api.coingecko.com/api/v3/coins/market";
const moeda = "€";
//fazer clone da tabela
var clonemedia = $('.tr').clone();
var dadostable100 = [];
$(document).ready(function(){ 
	$.ajax({
		//definir tipo de request
		method: "GET",
		//definir para onde vamos enviar
		url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
	}).done(function(res){
		$('.tr').remove();
		//adiciona o objeto res dentro de uma array para utilizar mais tarde
		dadostable100 = res;
        $.each(res, function(index, result){
			var litable = clonemedia.clone();
            //alterar id image
            $(litable).attr('id',index)
			$('.nmr',litable).text(result.market_cap_rank)
			$('.icon', litable).attr('src', result.image)
            $('.nome',litable).text(result.id)
            $('.nome', litable).attr('onclick', 'tableDetalhes("star_'+result.id+'"); adicionarFavorito("star_'+result.id+'")')
            $('.price',litable).text(result.current_price)
            $('.marketcap',litable).text(result.market_cap)
			$('.24h',litable).text(result.market_cap_change_percentage_24h)
			$('.star', litable).attr("id","star_"+result.id)
			//verificar se o local storage tem dentro dele o id selecionado
			if (lerfavoritos().indexOf('star_'+result.id) >= 0){
				$('.star', litable).attr('src', "img/selectstar.png");
			}
            //colocar na tabela HTML original
            $('#table1').append(litable);
		});
	})
})
//funcao table detalhes
function tableDetalhes(moeda){
	const clonetable = $('.table2').clone();
	$('.table2').html('');
	$.each(dadostable100, function(index, result){
		var litable = clonetable.clone();
	    $('.nome',litable).text(result.id)
	    $('.icon', litable).attr('src', result.image)
	    $('.price',litable).text(result.current_price)
	    $('.nmr',litable).text(result.market_cap_rank)
		$('.24h',litable).text(result.market_cap_change_percentage_24h)
		$('.star', litable).attr("id","star_"+result.id)
	    //colocar na tabela HTML original
		if ("star_"+result.id == 'star_bitcoin'){
		    $('.table2').append(litable);
		}
	})
}
//funcão para o seach utilizado o bootstrap
$(document).ready(function(){
  $("#PesquisaInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#table2 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
//funcao ler favoritos
function lerfavoritos(){
	//verifica se dentro do local storage já tem algo
	if (JSON.parse(localStorage.getItem('favoritos')) == null ){
		localStorage.setItem('favoritos', JSON.stringify([]));
	}
	//da return da array
	return JSON.parse(localStorage.getItem('favoritos'));
}
//funcao adicionar aos favoritos
function adicionarFavorito(id){
	//coloca dentro da var tudo o que esta dentro dos favoritos
	var favoritos = lerfavoritos();
	//vai verificar se dentro da array não esta aquele id
	if (favoritos.indexOf(id) == -1){
		//coloca dentro da array o id ex: "star_bitcoin"
		favoritos.push(id);
	}
	//atualiza o local storage
	localStorage.setItem('favoritos', JSON.stringify(favoritos));
	
}

//funcao para alterar a imagem das stars
function alternarStar(e){
	//averigua qual das imagens está posta e coloca a contraria
	if ($(e).attr('src')== "img/star.png") {
		//coloca a imagem
		e.setAttribute('src', "img/selectstar.png");
		//envia o id para a funcao adicionarFavoritos
		adicionarFavorito($(e).attr('id'));
	}else{
		//coloca a imagem
		e.setAttribute('src', "img/star.png");
		//envia o id para a funcao removeFavorito
		removeFavorito($(e).attr('id'));
	}
}
//funcao removeFavorito
function removeFavorito(id){
	//coloca dentro da var tudo o que esta dentro dos favoritos
	var favoritos = lerfavoritos();
	//se tiver o id dentro da array vai remover "slice" 
	favoritos.splice(favoritos.indexOf(id), 1);
	//atualiza o localstorage
	localStorage.setItem('favoritos', JSON.stringify(favoritos));
}
//funcao para criar a tabela
function favoritos(){
	//coloca dentro da const tudo o que esta dentro dos favoritos
	const favoritos = lerfavoritos();
	//faz o ciclo each com a array dadostable100
	$.each(dadostable100, function(index, result){
		//verifica se  o id que vem dos dadostable100 esta tambem dentro dos favoritos, se tiver deixa se nao tiver remove
		if (favoritos.indexOf('star_'+result.id) == -1 ){
			$('#'+index).remove();
		}
	})
}

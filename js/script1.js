'use strict';

const cryptoApi = "https://api.coingecko.com/api/v3/coins/market";
const moeda = "€";

$('#BS').on('click', function teste() {
    $.ajax({
        method: "GET",
        url: cryptoApi,
        dataType: "json",

    }).done(function (res) {
        console.log(res)
    })
})
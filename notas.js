////////////////////////////////////////////////////////////////////////////////////////////////
const cryptoApi = "https://api.coingecko.com/api/v3";
const moeda = "€";

function teste() {
    $.ajax({
        method: "GET",
        url: "https://api.coingecko.com/api/v3/coins/list",
        dataType: "json",
        success: function (data) {
            console.log(data);
        }
    }.done(function (res) {
        console.log(res)
    })
    )
}
////////////////////////////////////////////////////////////////////////////////////////////////

function searchCoins() {
    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: "https://api.coingecko.com/api/v3/coins/" + PesquisaInput.value,
        success: function (data) {
            searchCoins[0] = data
            $(".searchResult").html($(`.${PesquisaInput}`));
            console.log(data)
        },
        error: function (error) {
            console.log("error : ", error);
        }
    });
}
////////////////////////////////////////////////////////////////////////////////////////////////
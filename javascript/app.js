// var topics = [];



function getGifs() {

    var input = $(this).data("giphy");
    var api_key = '3K2ZmyEMrXGGyR7EGBGnbti1HZNk2TZL';
    var url = 'http://api.giphy.com/v1/gifs/search?api_key=' + api_key + '&q=' + input + '&limit=10';

    $.ajax({
        url: url
    }).done(function(res) {
        console.log (res);
        var gifs = res.data;

        $('#giphy-view').empty();

        for (var i = 0; i < gifs.length; i++) {
            var url_2 = gifs[i].images.downsized.url;

          //  $('#giphy-view').append($('<div>').css('background-image', 'url(' + url2 + ')'));
        	
        	$('#giphy-view').append($('<img>').attr('src',url_2));
        
        }
    });
}

//this function is to add and display giph buttons to the 
function createGiphyButton() {
    event.preventDefault();

    var giphySearch = $("#giphy-input").val().trim();
    var giphyButton = $("<button>");

    giphyButton.addClass("myGiphs");
    giphyButton.attr("data-giphy", giphySearch)

	
    giphyButton.text(giphySearch);
    $("#giphyButtons-view").append(giphyButton);
  //  topics.push(giphySearch);
    
}

$("#add-giphy").on("click", createGiphyButton);


//this function is to grab the giph from API
$(document).on('click', '.myGiphs', getGifs);